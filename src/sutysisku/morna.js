var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var externalConfig = {
    cll_source: 'https://la-lojban.github.io/uncll/uncll-1.2.14/xhtml_section_chunks/',
    feedback_backend_url: 'https://sutysisku-report.herokuapp.com/',
    issues_repo: "https://github.com/La-Lojban/pinka/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",
    sql_mode: 'readall-false',
    GA_MEASUREMENT_ID: 'UA-45171210-6',
    SUTYSISKU_URL: 'la-lojban.github.io/sutysisku'
};
import * as webpack from 'webpack';
import * as fs from 'fs-extra';
var path = require('path-extra');
import axios from 'axios';
import * as brotli from 'brotli-wasm';
import * as cheerio from 'cheerio';
// const babel = require('@babel/core')
// const env = require('@babel/preset-env')
var now = new Date().getTime();
// config
var args = process.argv.slice(2);
var langs = args.length > 0
    ? args
    : [
        'lojban',
        // 'ile',
        // 'ina',
        // 'ithkuil',
        // 'laadan',
        // 'ldp',
        // 'zamenhofo',
        // 'epo-tha',
        // 'simplingua-zho',
        // 'toki',
        // 'ktv-eng',
        // 'en-pt-BR',
        // 'muplis-eng-pol',
    ];
generateCLLDictionary();
generateLLDictionary();
generatePremadeDicts();
// functions
// generic
function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0".concat(hex);
    }
    return hex;
}
function generatePremadeDicts() {
    return __awaiter(this, void 0, void 0, function () {
        var content, hash, versio, jsonTimes;
        return __generator(this, function (_a) {
            content = JSON.parse(fs.readFileSync('/livla/src/sutysisku/src/data/parsed-sutysisku-0.blob.json', { encoding: 'utf8' }));
            fs.writeFileSync(path.join('/livla/build/sutysisku/data', 'parsed-sutysisku-0.bin'), brotli.compress(Buffer.from(JSON.stringify(content))));
            hash = require('object-hash')(content);
            versio = '/livla/build/sutysisku/data/versio.json';
            jsonTimes = {};
            try {
                jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }));
            }
            catch (error) { }
            jsonTimes['sutysisku'] = hash;
            fs.writeFileSync(versio, JSON.stringify(jsonTimes));
            return [2 /*return*/];
        });
    });
}
function generateCLLDictionary() {
    return __awaiter(this, void 0, void 0, function () {
        var json, _loop_1, _i, _a, file, arr, outp, hash, versio, jsonTimes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    json = {};
                    _loop_1 = function (file) {
                        var appendix;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    appendix = externalConfig.cll_source + file.name;
                                    return [4 /*yield*/, axios(appendix)];
                                case 1:
                                    (_c.sent()).data
                                        .match(/<dt>(.*?)<\/dt>[ \t\n\r]*((?=<dt>)|(?=<\/)|<dd>(.*?)<\/dd>)/gs)
                                        .forEach(function (el) {
                                        var arrEl = el.replace(/[ \t]*\n[ \t]*/g, '').replace(/>[ \t]+/g, '>').replace(/^<dt>(.*?)(?=<a )(.*)$/s, '$1\t$2').split(/\t/);
                                        if (arrEl.length === 2) {
                                            var selmaho = arrEl[0]
                                                .replace(/ *<.*?>.*/g, '')
                                                .trim()
                                                .replace(/ (selma'o|construct)/g, '')
                                                .replace(/ *:/g, '')
                                                .replace(/^\./, '')
                                                .replace(/\.$/, '');
                                            var jsonLinks_1 = {};
                                            ((arrEl[1] || '').match(/<a (.*?)<\/a>/gs) || []).forEach(function (i) {
                                                var arrI = i
                                                    .replace(/<a .*?href="(.*?)(?:#.*?)?".*?>(.*?)<\/a>/s, '$1\t$2')
                                                    .split(/\t/);
                                                jsonLinks_1[arrI[0]] = arrI[1]
                                                    .replace(/[\n\r]/g, ' ')
                                                    .replace(/ {2,}/g, ' ')
                                                    .trim();
                                            });
                                            json[selmaho] = { d: jsonLinks_1 };
                                            if (file.type === 'English')
                                                json[selmaho].t = { bangu: "glico", type: "English term", k: 0 };
                                        }
                                        else {
                                            console.log(el);
                                        }
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, _a = [{ name: 'ix01.html', type: 'lojbo' }, { name: 'ix02.html', type: 'English' }];
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    file = _a[_i];
                    return [5 /*yield**/, _loop_1(file)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    arr = Object.keys(json).map(function (i) { return (__assign({ w: i, cache: __spreadArray([], Array.from(new Set([i, i.replace(/h/g, "'")])), true) }, json[i])); });
                    outp = {
                        "formatName": "dexie",
                        "formatVersion": 1,
                        "data": {
                            "databaseName": "sorcu1",
                            "databaseVersion": 1,
                            "tables": [
                                {
                                    "name": "valsi",
                                    "schema": "++id, bangu, w, d, n, t, g, *r, *cache",
                                    "rowCount": arr.length
                                }
                            ],
                            "data": [{
                                    "tableName": "valsi",
                                    "inbound": true,
                                    "rows": arr
                                }]
                        }
                    };
                    fs.writeFileSync(path.join('/livla/build/sutysisku/data', 'parsed-en-cll-0.bin'), brotli.compress(Buffer.from(JSON.stringify(outp))));
                    hash = require('object-hash')(outp);
                    versio = '/livla/build/sutysisku/data/versio.json';
                    jsonTimes = {};
                    try {
                        jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }));
                    }
                    catch (error) { }
                    jsonTimes['en-cll'] = hash;
                    fs.writeFileSync(versio, JSON.stringify(jsonTimes));
                    return [2 /*return*/];
            }
        });
    });
}
var settings_path = '/livla/build/sutysisku/data/tcini.json';
var settings = {
    vreji: [
        './',
        './index.html',
        'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
        'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff',
        'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff',
        'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff',
        'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js',
        'https://unpkg.com/microfeedback-button/dist/microfeedback-button.min.js',
        './sql-wasm.wasm',
        '../assets/fonts/linux-libertine/LinLibertine_R.otf',
        '../assets/fonts/linux-libertine/LinLibertine_RI.otf',
        '../assets/fonts/linux-libertine/LinLibertine_RB.otf',
        '../assets/fonts/linux-libertine/LinLibertine_RBI.otf',
        '../assets/fonts/crisa-regular.otf',
        './bangu.js?sisku={now}',
        '../assets/scripts/aws-sdk.min.js',
        './index.js?detri={now}',
        './index.css?detri={now}',
        './worker.js?sisku={now}',
        '../assets/scripts/leader-line.min.js',
        '../pixra/144.png',
        '../pixra/32.png',
        '../pixra/shuffle.svg',
        '../pixra/cukta.svg',
        '../pixra/certu.svg',
        '../pixra/fanva.svg',
        '../pixra/cll.png',
        '../pixra/cmalu_snime.svg',
        '../pixra/snime.svg',
        '../pixra/menu.svg',
        '../pixra/x.svg',
        '../pixra/jbotcan.svg',
        '../pixra/murse.jpg',
        '../pixra/taplamuplis.svg',
        '../pixra/nunsku.svg',
        '../pixra/plise.svg',
        '../pixra/pelxuplise.svg',
        '../pixra/crinoplise.svg',
        '../pixra/blabiplise.svg',
        '../pixra/cicnaplise.svg',
        '../pixra/selsku_lanci_eng.svg',
        '../pixra/selsku_lanci_zho.svg',
        '../pixra/lanci_jbo.svg',
        '../pixra/selsku_lanci_jpn.svg',
        '../pixra/selsku_lanci_fra.svg',
        '../pixra/selsku_lanci_rus.svg',
        '../pixra/lanci_epo.svg',
        '../pixra/selsku_lanci_spa.svg',
        '../pixra/loglan.png',
        '../pixra/cogwheel-5.svg',
        '../sance/lerfu/a.ogg',
        '../sance/lerfu/ai.ogg',
        '../sance/lerfu/aia.ogg',
        '../sance/lerfu/au.ogg',
        '../sance/lerfu/aua.ogg',
        '../sance/lerfu/b.ogg',
        '../sance/lerfu/c.ogg',
        '../sance/lerfu/d.ogg',
        '../sance/lerfu/e.ogg',
        '../sance/lerfu/ei.ogg',
        '../sance/lerfu/f.ogg',
        '../sance/lerfu/g.ogg',
        "../sance/lerfu/'.ogg",
        '../sance/lerfu/i.ogg',
        '../sance/lerfu/j.ogg',
        '../sance/lerfu/k.ogg',
        '../sance/lerfu/l.ogg',
        '../sance/lerfu/m.ogg',
        '../sance/lerfu/n.ogg',
        '../sance/lerfu/o.ogg',
        '../sance/lerfu/oi.ogg',
        '../sance/lerfu/p.ogg',
        '../sance/lerfu/r.ogg',
        '../sance/lerfu/s.ogg',
        '../sance/lerfu/t.ogg',
        '../sance/lerfu/u.ogg',
        '../sance/lerfu/v.ogg',
        '../sance/lerfu/x.ogg',
        '../sance/lerfu/y.ogg',
        '../sance/lerfu/z.ogg',
    ]
};
settings.vreji = settings.vreji.map(function (i) { return i.replace(/{now}/g, now.toString()); });
fs.writeFileSync(settings_path, JSON.stringify(settings));
function generateLLDictionary() {
    return __awaiter(this, void 0, void 0, function () {
        var html, $, mapping, json, arr, outp, hash, versio, jsonTimes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios('https://lojban.pw/books/learn-lojban/')];
                case 1:
                    html = (_a.sent()).data;
                    $ = cheerio.load(html);
                    mapping = {};
                    $('h1, h2, h3, h4, h5').each(function (i, ele) {
                        var href = $(ele).children('a').attr('href');
                        if (!href || href.indexOf("#") !== 0)
                            return;
                        mapping[href.substr(1)] = $(ele).text().trim().replace(/#/g, '');
                    });
                    json = JSON.parse(fs.readFileSync('/livla/src/sutysisku/template/ll.json', { encoding: 'utf8' }));
                    arr = Object.keys(json).map(function (i) {
                        var d = json[i].d.split(",");
                        delete json[i].d;
                        var newdef = {};
                        for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                            var link = d_1[_i];
                            newdef[link] = mapping[link] || i;
                        }
                        return __assign(__assign({ w: i, cache: [i] }, json[i]), { d: newdef });
                    });
                    outp = {
                        "formatName": "dexie",
                        "formatVersion": 1,
                        "data": {
                            "databaseName": "sorcu1",
                            "databaseVersion": 1,
                            "tables": [
                                {
                                    "name": "valsi",
                                    "schema": "++id, bangu, w, d, n, t, g, *r, *cache",
                                    "rowCount": arr.length
                                }
                            ],
                            "data": [{
                                    "tableName": "valsi",
                                    "inbound": true,
                                    "rows": arr
                                }]
                        }
                    };
                    fs.writeFileSync(path.join('/livla/build/sutysisku/data', 'parsed-en-ll-0.json'), JSON.stringify(outp));
                    fs.writeFileSync(path.join('/livla/build/sutysisku/data', 'parsed-en-ll-0.bin'), brotli.compress(Buffer.from(JSON.stringify(outp))));
                    hash = require('object-hash')(outp);
                    versio = '/livla/build/sutysisku/data/versio.json';
                    jsonTimes = {};
                    try {
                        jsonTimes = JSON.parse(fs.readFileSync(versio, { encoding: 'utf8' }));
                    }
                    catch (error) { }
                    jsonTimes['en-ll'] = hash;
                    fs.writeFileSync(versio, JSON.stringify(jsonTimes));
                    return [2 /*return*/];
            }
        });
    });
}
function fullColorHex(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#".concat(red).concat(green).concat(blue);
}
// templating - remove parts not relevant to the current sutysisku
String.prototype.stripout = function (config, tag) {
    var tags = tag
        .split('\\|')
        .map(function (j) { return !!(config[j] && config[j] !== 'false'); });
    var m = tags.includes(true);
    var ku = m ? '$1' : '';
    var antiku = !m ? '$1' : '';
    return this
        // OR operator
        .replace(new RegExp("\\/\\/<".concat(tag, ">([\\s\\S]*?)\\/\\/<\\/").concat(tag, ">"), 'gm'), ku)
        .replace(new RegExp("\\/\\* *<".concat(tag, ">([\\s\\S]*?)\\/\\/<\\/").concat(tag, "> \\*\\/"), 'gm'), ku)
        .replace(new RegExp("<".concat(tag, ">([\\s\\S]*?)</").concat(tag, ">"), 'gm'), ku)
        // NOT operator
        .replace(new RegExp("\\/\\/<".concat(tag, " false>([\\s\\S]*?)\\/\\/<\\/").concat(tag, ">"), 'gm'), antiku)
        .replace(new RegExp("\\/\\* *<".concat(tag, " false>([\\s\\S]*?)\\/\\/<\\/").concat(tag, "> *\\*\\/"), 'gm'), antiku)
        .replace(new RegExp("<".concat(tag, " false>([\\s\\S]*?)</").concat(tag, ">"), 'gm'), antiku);
};
String.prototype.replaceMergefield = function (config) {
    return Object.keys(config).reduce(function (acc, i) { return acc.replace(new RegExp("['\"]%".concat(i, "%['\"]"), 'g'), config[i]); }, this);
};
function processTemplate(_a) {
    var config = _a.config, fallback = _a.fallback, now = _a.now, file = _a.file;
    var output = file
        .replace(/{now}/g, now.toString())
        .replaceMergefield(config)
        .replaceMergefield(fallback)
        /// /strip out according to Lojbanicity of the sutysisku
        .stripout(config, 'xuzganalojudri\\|lojbo')
        .stripout(config, 'xuzganalojudri')
        .stripout(config, 'lojbo')
        .stripout(config, 'muplis');
    return output;
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, langs_1, lang, config, config_fallback, arr, _a, _b, el, output, d, b, langs_jbo, _c, langs_jbo_1, lang, content, dummyAppcache, childProcess, TerserPlugin_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                // generate files
                for (_i = 0, langs_1 = langs; _i < langs_1.length; _i++) {
                    lang = langs_1[_i];
                    fs.copySync("/livla/src/sutysisku/template/sqljs", "/livla/build/sutysisku/".concat(lang, "/sqljs"));
                    fs.copySync("/livla/src/sutysisku/template/asql", "/livla/build/sutysisku/".concat(lang, "/asql"));
                    fs.copyFileSync("/livla/src/sutysisku/src/".concat(lang, "/bangu.js"), "/livla/build/sutysisku/".concat(lang, "/bangu.js"));
                    fs.copyFileSync("/livla/src/sutysisku/src/".concat(lang, "/config.json"), "/livla/build/sutysisku/".concat(lang, "/config.json"));
                    config = JSON.parse(fs.readFileSync(path.join('/livla/build/sutysisku/', lang, 'config.json'), { encoding: 'utf8' }));
                    if (process.env.COMPRESS === 'false')
                        config.production = false;
                    else
                        config.production = "production";
                    config_fallback = __assign(__assign({ lang: lang }, externalConfig), { title: "la sutysisku zo'u: ze'i mitysisku lo valsi", favicon: '../pixra/snime.svg', icon16: '../pixra/16.png', icon32: '../pixra/32.png', ogurl: "https://".concat(externalConfig.SUTYSISKU_URL, "/").concat(lang, "/index.html"), ogtitle: 'Sutysisku', searchurl: "/sutysisku/".concat(lang, "/sisku.xml"), searchtitle: "".concat(lang, "-sutysisku"), titlelogo: "<a id='title' onclick='EmptyState()' href='javascript:;' aria-label='la sutysisku'><span id='site-title'  class='desktop-mode-title-color'><img id=\"logo\" src=\"../pixra/snime.svg\" height='16' width='16' alt='logo'><font color='#fff' data-jufra='titlelogo-inner'>la sutysisku</font></span></a>", arxivoskari1: '233, 195, 58', arxivoskari2: '211, 172, 34', arxivoskari3: '224, 183, 36', arxivoskari4: '164, 134, 25', mupliskari1: '56,136,233', mupliskari2: '34,87,213', mupliskari3: '38,99,224', mupliskari4: '25,65,165', catniskari1: '58,116,233', catniskari2: '34,87,210', catniskari3: '36,68,224', catniskari4: '25,48,164', fanvaskari1: '210,58,233', fanvaskari2: '208,34,211', fanvaskari3: '224,36,224', fanvaskari4: '164,25,164', velcusku_skari1: '214, 58, 233', velcusku_skari2: '193, 34, 211', velcusku_skari3: '205, 36, 224', velcusku_skari4: '150, 25, 164', rimniskari1: '230,47,0', rimniskari2: '119,29,29', rimniskari3: '220,4,4', rimniskari4: '95,29,0', gradpos1: '0%', gradpos2: '8%', gradpos3: '92%', gradpos4: '100%', rimnigradpos1: '0%', rimnigradpos2: '8%', rimnigradpos3: '92%', rimnigradpos4: '100%', kunti: 'clear', rimni: 'rhymes', cnano: '+', catni: 'search', arxivo: 'archive', velcusku: 'read chat', parse: 'parse' });
                    arr = (config.mupliskari4 || config_fallback.mupliskari4)
                        .split(',')
                        .map(function (i) { return i.trim(); });
                    config.mupliskariralju = fullColorHex(arr[0], arr[1], arr[2]);
                    // read template.html into var
                    for (_a = 0, _b = [
                        {
                            file: 'index.html',
                            out: 'index.html'
                        },
                        {
                            file: 'index.css',
                            out: 'index.css'
                        },
                        {
                            file: 'sqljs/sql-wasm.wasm',
                            out: 'sql-wasm.wasm',
                            simpleCopy: true
                        },
                        {
                            file: 'socket.io.js',
                            out: 'socket.io.js',
                            simpleCopy: true
                        },
                        {
                            file: 'cmaxes.js',
                            out: 'cmaxes.js',
                            simpleCopy: true
                        },
                        {
                            file: 'worker.js',
                            out: 'worker.js'
                        },
                        {
                            file: 'index.js',
                            out: 'index.js',
                            uglify: true
                        },
                    ]; _a < _b.length; _a++) {
                        el = _b[_a];
                        if (el.simpleCopy) {
                            fs.copyFileSync(path.join(__dirname, './template', el.file), path.join('/livla/build/sutysisku/', lang, el.out));
                            continue;
                        }
                        output = processTemplate({
                            config: config,
                            fallback: config_fallback,
                            now: now,
                            file: fs.readFileSync(path.join(__dirname, './template', el.file), {
                                encoding: 'utf8'
                            })
                        });
                        fs.writeFileSync(path.join('/livla/build/sutysisku/', lang, el.out), output);
                    }
                    d = new Date();
                    b = fs
                        .readFileSync(path.join(__dirname, './template', 'sisku.xml'), {
                        encoding: 'utf8'
                    })
                        .replace('%template%', "https://".concat(externalConfig.SUTYSISKU_URL, "/").concat(lang, "/index.html#seskari=cnano&amp;sisku={searchTerms}"))
                        .replace('%shortname%', "".concat(lang, "-sutysisku"))
                        .replaceMergefield(config);
                    fs.writeFileSync(path.join('/livla/build/sutysisku/', lang, 'sisku.xml'), b);
                    // copy coi.js
                    try {
                        fs.writeFileSync(path.join('/livla/build/sutysisku/', lang, 'coi.js'), fs
                            .readFileSync(path.join(__dirname, 'template', 'coi.js'), {
                            encoding: 'utf8'
                        })
                            .replace(/{now}/g, now.toString())
                            .replace(/{lang}/g, lang));
                    }
                    catch (error) { }
                }
                fs.copyFileSync(path.join(__dirname, "./template/tejufra.json"), path.join("/livla/build/sutysisku/lojban/tejufra.json"));
                langs_jbo = [
                    'jbo',
                    'en',
                    'ru',
                    'es',
                    'fr',
                    'pl',
                    'ja',
                    'de',
                    'eo',
                    'zh',
                    'en-simple',
                    'fr-facile',
                    'hu',
                    'sv',
                    'loglan'
                ];
                _c = 0, langs_jbo_1 = langs_jbo;
                _d.label = 1;
            case 1:
                if (!(_c < langs_jbo_1.length)) return [3 /*break*/, 4];
                lang = langs_jbo_1[_c];
                content = "<!DOCTYPE HTML>\n    <html lang=\"en-US\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <script type=\"text/javascript\">\n                var hash = window.location.hash.replace(/#sisku\\//,'#seskari=cnano&sisku=') || '#'\n                window.location.href = \"/sutysisku/lojban/index.html\"+hash+\"&bangu=".concat(lang, "\";\n            </script>\n            <title>Page Redirection</title>\n        </head>\n        <body>\n            If you are not redirected automatically, follow the <a href='/sutysisku/lojban/index.html#'>La Sutysisku</a>\n        </body>\n    </html>");
                return [4 /*yield*/, fs.outputFile("/livla/build/sutysisku/".concat(lang, "/index.html"), content)
                    // generate appcache
                ];
            case 2:
                _d.sent();
                dummyAppcache = "CACHE MANIFEST\n# ".concat(new Date().toISOString(), "\nNETWORK:\n*\n");
                try {
                    fs.writeFileSync(path.join('/livla/build/sutysisku/', lang, 'webapp.appcache'), dummyAppcache);
                }
                catch (error) { }
                _d.label = 3;
            case 3:
                _c++;
                return [3 /*break*/, 1];
            case 4:
                if (process.env.MUPLIS == 'true') {
                    childProcess = require('child_process');
                    childProcess.execFileSync('node', ['/livla/src/skripto/phrases/skripto.js'], { cwd: __dirname });
                    console.log('muplis task finished');
                }
                else {
                    console.log('muplis task skipped');
                }
                if (!!process.env.DEBUG) return [3 /*break*/, 6];
                TerserPlugin_1 = require("terser-webpack-plugin");
                return [4 /*yield*/, new Promise(function (resolve) {
                        webpack({
                            module: {
                                rules: [
                                    {
                                        test: /\.html$/i,
                                        loader: "html-loader"
                                    },
                                ]
                            },
                            entry: {
                                cmaxes: '/livla/build/sutysisku/lojban/cmaxes.js',
                                index: '/livla/build/sutysisku/lojban/index.js',
                                coi: '/livla/build/sutysisku/lojban/coi.js',
                                // "index.html": '/livla/build/sutysisku/lojban/index.html',
                                worker: '/livla/build/sutysisku/lojban/worker.js'
                            },
                            output: {
                                filename: '[name].js',
                                path: '/livla/build/sutysisku/lojban'
                            },
                            resolve: {
                                // extensions: ['.dev.js', '.js', '.json', '.wasm'],
                                fallback: {
                                    "stream": require.resolve("stream-browserify"),
                                    "buffer": require.resolve("buffer"),
                                    crypto: false,
                                    path: false,
                                    fs: false
                                }
                            },
                            mode: 'production',
                            node: false,
                            // module: {
                            //   rules: [
                            //     {
                            //       test: /\.m?js$/,
                            //       use: {
                            //         loader: "babel-loader",
                            //         options: {
                            //           presets: ["@babel/preset-env"], // ensure compatibility with older browsers
                            //           plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
                            //         },
                            //       },
                            //     },
                            //     {
                            //       test: /\.js$/,
                            //       loader: "webpack-remove-debug", // remove "debug" package
                            //     },
                            //   ],
                            // },
                            optimization: {
                                minimize: true,
                                minimizer: !process.env.COMPRESS ? [new TerserPlugin_1()] : []
                            },
                            plugins: [
                                // new webpack.DefinePlugin({
                                //   'process.env.PERF_BUILD': false
                                // }),
                                new webpack.ProvidePlugin({
                                    Buffer: ['buffer', 'Buffer']
                                }),
                                new webpack.ProvidePlugin({
                                    process: 'process/browser'
                                }),
                            ]
                        }, function (error, stats) {
                            if (error || (stats === null || stats === void 0 ? void 0 : stats.hasErrors())) {
                                console.log('webpack has errors');
                                fs.writeFileSync('/livla/build/sutysisku/lojban/log.txt', (error || '').toString() + "\n" + stats.toString());
                            }
                            else
                                console.log('webpacked');
                            resolve(null);
                        });
                    })];
            case 5:
                _d.sent();
                _d.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); })();
