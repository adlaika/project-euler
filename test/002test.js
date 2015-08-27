(function() {
  'use strict'

  var assert = require('assert');
  var exports = require('../solutions/002.js');

  describe('Problem 2', function() {
    it('should have an addEvenFibonacciSums method', function() {
      assert.equal(typeof exports, 'object');
      assert.equal(typeof exports.addEvenFibonacciSums, 'function');
    });
    it('addEvenFibonacciSums(4000000) should equal 4613732', function() {
      assert.equal(exports.addEvenFibonacciSums(4000000), 4613732);
    });
  });

})();
