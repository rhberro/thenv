'use strict'

var fs = require('fs')

function read (filename) {
  try {
    return fs.readFileSync(filename, 'utf8')
  } catch (error) {
    return ''
  }
}

module.exports = {
  read
}
