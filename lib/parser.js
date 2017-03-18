'use strict'

function isComment (line) {
  return line.trim().indexOf('#') === 0
}

function hasSetter (line) {
  return line.trim().indexOf('=') > 0
}

function isValid (line) {
  return hasSetter(line) && !isComment(line)
}

function getLines (content) {
  return content.split('\n').filter(isValid)
}

function parse (properties) {
  return properties;
}

module.exports = {
  parse
}
