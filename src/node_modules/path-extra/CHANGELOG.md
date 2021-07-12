4.3.0 / 2019-09-23
------------------

- Add TypeScript typings ([#30](https://github.com/jprichardson/node-path-extra/pull/30))

4.2.1 / 2017-09-01
------------------

- Added argument type-checking for `fileNameWithPrefix()` & `fileNameWithPostfix()` to prevent unexpected behavior. [#28](https://github.com/jprichardson/node-path-extra/pull/28)

4.2.0 / 2017-06-24
------------------
- Added `fileNameWithPrefix()` & `fileNameWithPostfix()`

4.1.0 / 2017-03-06
------------------
- Added `removeExt()`

4.0.0 / 2016-09-14
------------------
### Breaking
- dropped `homedir()`, `tempdir()`, and `datadir()`

### Added
- `replaceExt()`, `normalizeTrim()`, `base()`

3.0.0 / 2015-11-05
------------------
- fix linux config directory. Bumped major as it could have a breaking change for some modules. https://github.com/jprichardson/node-path-extra/pull/14

2.0.0 / 2015-10-05
------------------
- use env variables https://github.com/jprichardson/node-path-extra/pull/13

1.0.3 / 2015-05-24
------------------
- license fix https://github.com/jprichardson/node-path-extra/pull/11

1.0.2 / 2015-03-02
------------------
- bugfix `path.delimiter` / all properties added

1.0.1 / 2015-03-01
------------------
- bugfix: Windows `datadir()` was incorrect for default, this is breaking, but is a bugfix

1.0.0 / 2015-02-28
------------------
- added `sep` support. See #10
- use `standard` styling

0.3.0 / 2014-09-08
------------------
- add freebsd support

0.2.1 / 2014-06-23
------------------
* fixed npm warning about `homepage` field #6

0.2.0 / 2014-04-28
------------------
* added sunos support #5

0.1.1 / 2013-05-14
------------------
* Windows XP support for datadir

0.1.0 / 2013-03-18
------------------
* Added `datadir()`.

0.0.3 / 2012-08-07
------------------
* Removed CoffeeScript dev dependence.
* Added `homedir()` method.
