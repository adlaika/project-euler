(function() {
  'use strict'

  var assert = require('assert');
  var exports = require('../solutions/007.js');
  var helpers = require('../solutions/helpers.js');
  var testVars = require('./testVars.js');

  describe('Problem 7', function() {
    it('should return the next highest prime', function() {
      assert.equal(exports.getNextPrime(1), 2);
      assert.equal(exports.getNextPrime(10), 11);
      assert.equal(exports.getNextPrime(12), 13);
    });
    it('should return the first n primes', function() {
      assert.deepEqual(exports.getPrimes(6), [2, 3, 5, 7, 11, 13]);
      assert.deepEqual(exports.getPrimes(1), [2]);
      assert.deepEqual(exports.getPrimes(0), []);
    });
    it('should produce the 10001st prime', function() {
      var primes = exports.getPrimes(10001);
      assert.equal(primes[10000], 104743);
    });
  });

})();
