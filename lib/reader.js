'use strict'

var fs = require('fs')

module.exports = function (filename, encoding) {
  filename = filename || '.env'
  encoding = encoding || 'utf8'

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
