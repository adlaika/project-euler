(function() {
  'use strict'

  var assert = require('assert');
  var exports = require('../solutions/003.js');

  describe('Problem 3', function() {
    it('should have a primeFactors method', function() {
      assert.equal(typeof exports.primeFactors, 'function');
    });
    it('the final element in primeFactors(600851475143) should equal 6857', function() {
      var results = exports.primeFactors(600851475143);
      assert.equal(results[results.length - 1], '6857');
    });
  });

})();
