'use strict'

var fs = require('fs')

module.exports = function (filename, encoding) {
  var read = function (filename, encoding) {
    try {
      return fs.fileReadSync(filename, encoding)
    } catch (error) {
      return ''
    }
  }

  return {
    read: read
  }
}
