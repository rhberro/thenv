'use strict'

var fs = require('fs')

var reader = {
  /**
   * Reads the environment file and return it contents.
   *
   * @param  {String}
   * @param  {String}
   * @return {String}
   */
  read: function (filename, encoding) {
    try {
      return fs.readFileSync(filename, encoding)
    } catch (err) {
      return null
    }
  }
}

module.exports = reader
