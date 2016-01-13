This is a wrapper library for the Mediawiki API.

This library is woefully incomplete. The only parts implemented were those
necessary to collect all the pages in a category and append text to it.

If you need more functionality, file an issue, and it'll get fixed, fix it
yourself and send a push request, or use the internal _request method that
is explained later in this article.

It is likely that in the future the callback that every function requires will
become optional.

## Installation

```
npm install mediawiki-api
```

### Usage

```javascript
var MediaWikiApi = require('mediawiki-api');

wiki = new MediaWikiApi('your-wiki.org');
```

All actions happen over HTTP.

### Configuration

The only configurable property is ''isBot'', which is true by default.

```javascript
wiki.isBot = (true || false);
```

### Events

Every function returns an event emitter that will emit three events:

* complete &mdash; Called when the request is complete. Gives err and res as
parameters.
* error &mdash; Called when the request is complete and there is an error.
* result &mdash; Called when the request is complete, and there is no error.

An optional parameter after each method is a callback to be called when the
complete event is fired.

## Functionality

### Logging In/Out

Logging in is important for making sure your edits are done under a bot
account.

```javascript
wiki.login(username, password, callback)
```

Logging out is less important, but it is a good idea not to leave sessions
open longer than necessary. You also cannot use the session after the wrapper
is closed, so there's little reason not to logout after you are done.

```javascript
wiki.logout(callback)
```

#### Example

Here's an example of logging in and then logging out.

```javascript
wiki.login('user', 'mysecret', function (err, res) {
    if (err) {
        console.log(err);
        return;
    }

    // We are currently logged in.

    // Do stuff logged in.

    wiki.logout(function (err, res) {
        if (err) {
            console.log(err);
            return;
        }

        // We are now logged out.
    });
});
```

### Getting Article Contents

```javascript
wiki.getArticleContents(article, callback)
```

__article__ is the title of the article or the article id.

Only one article should be sent. A request for multiple articles will return
only one article in an arbitrary fashion.

The contents of the article is a plain old string.

### Editing Pages

```javascript
wiki.edit(article, body, callback)
```

The **article** can be either a string for the page name or a number for its
id.

The **body** can contain all of the parameters found at
https://www.mediawiki.org/wiki/API:Edit. Even so, it requires one of the
following properties: text, appendtext, prependtext

If *appendtext* or *prependtext* are set, then the *text* parameter is
ignored.

The edit token and md5 verification are automatically handled for you.

Edits done by this method will not create new pages, or restore deleted pages.

### Getting Category Members

```javascript
wiki.categorymembers(category, query, callback)
```

You can pass any parameter that starts with 'cm' into the query, but don't
include the 'cm' in it. This query is limited to 50 by default. The results
are not cleaned up, and you'll get the raw response.

#### Example

This script will get the first 500 articles in the Author category in the main
namespace, put their titles into an array, and then print the array to the
console.

```javascript
wiki.getCategoryMembers("Author", {
    limit: 500,
    prop: 'title',
    namespace: 0,
}, function (err, res) {
    if (err) {
        console.log(err);
        return;
    }

    for (page in res.query.categorymembers) {
        var article = res.query.categorymembers[page];
        output.push(article.title);
    }
    
    console.log(output);
});
```

### Searching for Pages

* http://www.mediawiki.org/wiki/API:Search

```javascript
wiki.search(searchString, query)
```

You can pass any of the search parameters to query. The query defaults to 5
results. You get an array of results, each result having the following fields:

* ns - Namespace id of the article.
* title
* snippet - Some text on the page.
* size - Number of bytes of the page.
* wordcount - Number of words on the page.
* timestamp - When this information was generated.

#### Example

This example prints the first ten titles of the search 'Wizard' on the DnD
Wiki.

```javascript
dndwiki = new MediaWikiApi("dnd-wiki.org/");

dndwiki.search("Wizard", {
    limit: 10,
    what: "text"
}).on("result", function (articles) {
    for (var ix = 0; ix < articles.length; ix++) {
        console.log(articles[ix].title);
    }
});
```

## Unimplemented Functionality

If you use any of the methods described here, file an issue explaining what
you used them for.

### Tokens

Other than edit tokens being handled by the edit method, you'll need to get
and inject the other tokens. The _getToken private method will do that.

```javascript
wiki._getToken(tokenType, callback)
```

### Generic POST, GET, and Requests

```javascript
wiki._post(query, body, callback)
wiki._get(query, callback)
wiki._query(query, callback)
wiki._request(query, callback, method, body)
```

As of right now, there's no function other than the private _request method
that can handle things you usually have to be logged in to do.

__query__ is an object representation of the URL parameters. For example,
{
    action: 'query',
    list: 'categorymembers'
    cmtitle: 'Category:Author'
    cmlimit: 50
}

By default, format: 'json' will be added to all queries.

If you use, _query, then the method is get, and action: 'query' is set by
default.

__callback__ is explained eariler.

__method__ is the HTTP method. I.E. GET or POST.

__body__ is the body of the message as a JS object. Only use for HTTP
methods that have a body.

## Final Words

Again, the features that exist here exist because they were needed for a very
specific itch. If you need any additional features, they can be added.

If you do queries that are passed the results limit, you'll have to configure
the continuations yourself. This might be handled by the library automatically
in the future.