'use strict'

var fs = require('fs')

module.exports = {
  read: function (filename) {
    try {
      return fs.readFileSync(filename, 'utf8')
    } catch (error) {
      return ''
    }
  }
}
