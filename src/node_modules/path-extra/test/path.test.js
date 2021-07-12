var path = require('../lib/path')
var assert = require('assert').strict

/* global describe, it */

describe('path', function () {
  describe('+ replaceExt()', function () {
    it('should replace the extension', function () {
      assert.equal(path.replaceExt('path/to/file.md', '.html')
        , 'path/to/file.html')
    })
  })

  describe('+ normalizeTrim()', function () {
    it('should normalize the path and trim a trailing slash', function () {
      assert.equal(path.normalizeTrim('/foo/bar//baz/asdf/quux/../')
        , '/foo/bar/baz/asdf')
    })
  })

  describe('+ base()', function () {
    it('should include extension when includeExt is true', function () {
      assert.equal(path.base('/foo/bar/baz/asdf/quux.ext', true)
        , 'quux.ext', true)
    })
    it('should not include extension when includeExt is false', function () {
      assert.equal(path.base('/foo/bar/baz/asdf/quux.ext', false)
        , 'quux')
    })
    it('should not include extension by default', function () {
      assert.equal(path.base('/foo/bar/baz/asdf/quux.ext')
        , 'quux')
    })
  })

  describe('+ removeExt()', function () {
    it('should remove extensions', function () {
      assert.equal(path.removeExt('index.html'), 'index')
    })
    it('should preserve directories', function () {
      assert.equal(path.removeExt('subdir/index.html'), 'subdir/index')
    })
    it('should remove extensions when the extension is also in the filename', function () {
      assert.equal(path.removeExt('foo.bar/foo.bar.bar'), 'foo.bar/foo.bar')
    })
  })

  describe('+ path.sep', function () {
    it('should set path separator', function () {
      assert(path.sep)
    })
  })

  describe('+ path.delimiter', function () {
    it('should set path delimiter', function () {
      assert(path.delimiter)
    })
  })

  describe('+ path.fileNameWithPostfix', function () {
    it('should append string to the end of the filename', function () {
      assert.equal(path.fileNameWithPostfix('path/to/file-name.ext', '-old'), 'path/to/file-name-old.ext')
    })
  })

  describe('+ path.fileNameWithPrefix', function () {
    it('should append string at the beginning of the filename', function () {
      assert.equal(path.fileNameWithPrefix('path/to/file-name.ext', 'new-'), 'path/to/new-file-name.ext')
    })
  })
})
