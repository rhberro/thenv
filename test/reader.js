'use strict'

var assert = require('assert')
var reader = require('../lib/reader')

/* eslint-disable */
describe( 'Reader', function() {
  describe( 'Read', function() {
    it( 'should always return a string', function () {
      assert.equal( 'string', typeof reader.read('') )
      assert.equal( 'string', typeof reader.read('a') )
      assert.equal( 'string', typeof reader.read('b') )
      assert.equal( 'string', typeof reader.read('c') )
      assert.equal( 'string', typeof reader.read('d') )
      assert.equal( 'string', typeof reader.read('.env') )
    } )
  } )
} )
/* eslint-enable */
