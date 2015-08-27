(function() {
  'use strict'

  var assert = require('assert');
  var exports = require('../solutions/005.js');
  var helpers = require('../solutions/helpers.js');
  var testVars = require('./testVars.js');

  describe('Problem 5', function() {
    it('should have a smallestDivisibleByArr method', function() {
      assert.equal(typeof exports.smallestDivisibleByArr, 'function');
    });
    it('smallestDivisibleByArr([1...10]) should equal 2520', function() {
      assert.equal(exports.smallestDivisibleByArr(testVars.oneThruTen), 2520);
    });
    it('the answer should be 232792560', function() {
      var oneThruTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      assert.equal(exports.smallestDivisibleByArr(oneThruTwenty), '232792560');
    });
  });

})();
