var request = require('ahr2');
var crypto = require('crypto');
var EventEmitter = require('events').EventEmitter;

var md5 = function (text) {
    return crypto.createHash('md5').update(text).digest('hex');
};

var EE = function (callback) {
    var ee = new EventEmitter();

    if (callback) {
        ee.on('complete', callback);
    }

    return ee;
};

var mixin = function (addTo, addFrom, prefix) {
    prefix = prefix || "";

    for (var field in addFrom) {
        addTo[prefix + field] = addFrom[field];
    }

    return addTo;
};

function MediaWikiApi (site, api) {
    if (!site) {
        throw new Error("MediaWikiAPI needs a site to query.");
    }

    this.site = site;
    this.api = api || '/w/api.php';
    this.isBot = true;

    this.loggedIn = false;
    this.cookies = {
        prefix: "",
        map: {},
        parse: function () {
            var header = "";
            for (var key in this.map) {
                header += this.prefix + key + '=' + this.map[key] + "; ";
            }
            return header.slice(0, -2); // drop the final '; '
        }
    };

    this.tokens = {};
}

MediaWikiApi.prototype = {
    /**
     * @param category: String - Name of category to get members of.
     * @param options: Object - Other properties of the mediawiki api for
     *     the categorymembers query.
     */
    categorymembers: function (category, options, callback) {
        var query = {
            list: 'categorymembers',
            cmtitle: 'Category:' + category,
            cmlimit: 50
        };

        mixin(query, options, 'cm');

        if (query.cmcontinue === undefined) {
            delete query.cmcontinue;
        }

        this._query(query, callback);
    },

    /**
     * @param user: User to login.
     * @param pass: Plaintext password of user.
     * @param callback: Function to execute after logged in.
     */
    login: function (user, pass, callback) {
        var that = this;
        var ee = EE(callback);

        this._post({
            action: 'login',
            lgname: user,
            lgpassword: pass
        }, {}).on('result', function (err, res) {
            if (err) {
                ee.emit('complete', err, undefined);
                return;
            }

            that.cookies.prefix = res.login.cookieprefix;
            that.cookies.map['_session'] = res.login.sessionid;

            that._post({
                action: 'login',
                lgname: user,
                lgpassword: pass,
                lgtoken: res.login.token
            }, {}).on('complete', function (err, res) {
                if (err) {
                    ee.emit('complete', err, undefined);
                    return;
                }

                that.loggedIn = true;
                that.cookies.map['UserName'] = res.login.lgusername;
                that.cookies.map['UserID']   = res.login.lguserid;
                that.cookies.map['Token']    = res.login.lgtoken;

                ee.emit('complete', undefined, res);
            });
        });

        return ee;
    },

    /**
     * @param title Either article name (String) or article id (Number)
     * @param body Other options, including body.text
     * @param callback Function to call after the results of the operation.
     */
    edit: function (title, body, callback) {
        var that = this;
        var ee = EE(callback);

        // Handle the title.
        if (typeof title === "string") {
            body.title = title;
        } else if (typeof title === "number") {
            body.pageid = title;
        } else {
            throw new Error("Title must be a String (name of page) or " +
                "Number (page id).");
        }

        // Handle md5 and existence of an edit.
        if (body.appendtext || body.prependtext) {
            body.md5 = md5((body.prependtext || "") + (body.appendtext || ""));
        } else if (body.text) {
            body.md5 = md5(body.text);
        } else {
            throw new Error("Body must have textual content of some sort. " +
                "See http://www.mediawiki.org/wiki/API:Edit for details. " +
                "Include 'text', 'appendtext', and/or 'prependtext' " +
                "in the body parameter.");
        }

        // Handle not creating new pages.
        body.nocreate = 'true';

        // Handle making sure these are counted as bot edits, if they are.
        if (this.isBot) {
            body.bot = 'true';
        }

        // Handle getting the token.
        this._getToken('edit', function (err, token) {
            if (err) {
                ee.emit('complete', err, undefined);
                return;
            }

            body.token = token;

            // Turn the body into a String.
            body = that._makeQueryString(body);

            // Send the request off.
            that._post({action: 'edit'}, body).on('complete', function (err, res) {
                ee.emit('complete', undefined, res);
            });
        });
    },

    search: function (searchString, options, callback) {
        var that = this;
        var ee = EE(callback);

        var query = {
            list: 'search',
            srlimit: 5,
            srsearch: searchString
        };

        mixin(query, options, 'sr');

        this._query(query).on('complete', function (err, res) {
            if (res) {
                res = res.query.search;
            }

            ee.emit('complete', err, res);
        });

        return ee;
    },

    getArticleContents: function (article, callback) {
        var that = this;
        var ee = EE(callback);

        var query = {
            prop: 'revisions',
            rvprop: 'content'
        };

        if (typeof article === "string") {
            query.titles = article;
        } else if (typeof article === "number") {
            query.pageids = article;
        } else {
            throw new Error("Article must either be name of article or page id.");
        }

        this._query(query).on('complete', function (err, res) {
            var contents;
            if (res) {
                for (var page in res.query.pages) {
                    // Yes. This really is the location of the contents of
                    // the article. Why do you ask?
                    contents = res.query.pages[page].revisions[0]['*'];
                }
            }

            ee.emit('complete', err, contents);
        });

        return ee;
    },

    logout: function (callback) {
        this.loggedIn = false;
        delete this.cookies.map['UserName'];
        delete this.cookies.map['UserID'];
        delete this.cookies.map['Token'];
        delete this.cookies.map['_session'];

        return this._get({
            action: 'logout'
        }, callback);
    },

    _getToken: function (tokenType, callback) {
        var that = this;
        var ee = EE(callback);

        if (this.tokens[tokenType]) {
            callback(undefined, this.tokens[tokenType]);
            return;
        }

        this._query({
            prop: 'info',
            intoken: tokenType,
            titles: "Main Page"
        }, function (err, res) {
            var token;

            if (!err) {
                for (var page in res.query.pages) {
                    token = res.query.pages[page][tokenType + 'token'];
                }

                that.tokens[tokenType] = token;
            }

            callback(err, token);
        });
    },

    _request: function (query, callback, method, body) {
        var ee = EE(callback);

        query.format = 'json';

        var req = {
            method: method,
            hostname: this.site,
            port: 80,
            pathname: this.api,
            query: query,
            headers: {
                'Cookie': this.cookies.parse()
            }
        };

        if (body) {
            if (typeof body === "string") {
                req.encodedBody = body;
                req.headers['Content-Type'] = "application/x-www-form-urlencoded";
            } else {
                req.body = body;
            }
        }

        request(req).when(function (err, ahr, res) {
            // If there's an error according to the headers, treat it as one.
            // Otherwise, the error will end up as the result.
            if (ahr.headers['mediawiki-api-error']) {
                // We don't want the error to be the help file.
                if (ahr.headers['mediawiki-api-error'] === 'help') {
                    err = {
                        code: 'help',
                        info: 'The help page was shown instead of any ' +
                            'specific error message. This usually happens ' +
                            'when the action is left off. If you want to ' +
                            'see this page, the wikimedia one is at ' +
                            'http://en.wikipedia.org/w/api.php?action=help'
                    };
                } else {
                    err = res.error;
                }

                // Errors are not results.
                res = undefined;
            }

            ee.emit('complete', err, res);
        });

        return ee;
    },

    _post: function (query, body, callback) {
        return this._request(query, callback, 'POST', body);
    },

    _get: function (query, callback) {
        return this._request(query, callback, 'GET');
    },

    _query: function (query, callback) {
        query.action = 'query';

        return this._get(query, callback);
    },

    /**
     * Transforms a JSON object to the body structure expected by the MWAPI.
     */
    _makeQueryString: function (body) {
        var parts = [];
        var token;
        for (var field in body) {
            parts.push(field + "=" + body[field]);
        }

        return encodeURI(parts.join('&')).replace(/\+/g, "%2B");
    }
};

module.exports = MediaWikiApi;