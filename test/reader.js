/* eslint-disable */
const assert = require('assert')
const reader = require('../scripts/reader')

describe('Reader', function () {
  describe('#read', function () {

    it('should return null', function () {
      assert.equal(null, reader.read())
    } )

    it('should return an object', function () {
      assert.equal('object', typeof reader.read('.env'))
    } )

    it('should return a string', function () {
      assert.equal('string', typeof reader.read('.env', 'utf8'))
    } )

  } )
} )
/* eslint-enable */
