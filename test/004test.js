(function() {
  'use strict'

  var assert = require('assert');
  var exports = require('../solutions/004.js');
  var helpers = require('../solutions/helpers.js');

  describe('Problem 4', function() {
    it('should have a largestPalindrome method', function() {
      assert.equal(typeof exports.largestPalindrome, 'function');
    });
    it('the answer should be 906609', function() {
      assert.equal(exports.largestPalindrome(helpers.threeDigitProducts()), 906609);
    });
  });

})();
