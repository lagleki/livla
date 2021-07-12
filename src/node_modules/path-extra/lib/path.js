var path = require('path')

var p = {}

Object.keys(path).forEach(function (key) {
  p[key] = path[key]
})

path = p

path.replaceExt = require('replace-ext')

path.normalizeTrim = function (str) {
  var escapeRegexp = require('escape-string-regexp')
  return path.normalize(str).replace(new RegExp(escapeRegexp(path.sep) + '$'), '')
}

path.base = function (str, includeExt) {
  if (includeExt) {
    return path.basename(str)
  } else {
    return path.basename(str, path.extname(str))
  }
}

path.removeExt = function (str) {
  return str.slice(0, -path.extname(str).length)
}

path.fileNameWithPostfix = function (filePath, postfix) {
  if (typeof postfix !== 'string') {
    throw TypeError(`second argument 'postfix' must be string, got ${typeof postfix}`)
  }
  var ext = path.extname(filePath)
  var fileNameWithoutExt = path.basename(filePath, ext)
  return path.join(path.dirname(filePath), fileNameWithoutExt + postfix + ext)
}

path.fileNameWithPrefix = function (filePath, prefix) {
  if (typeof prefix !== 'string') {
    throw TypeError(`second argument 'prefix' must be string, got ${typeof prefix}`)
  }
  var ext = path.extname(filePath)
  var fileNameWithoutExt = path.basename(filePath, ext)
  return path.join(path.dirname(filePath), prefix + fileNameWithoutExt + ext)
}

module.exports = path
