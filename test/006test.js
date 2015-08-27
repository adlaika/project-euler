(function() {
  'use strict'

  var assert = require('assert');
  var exports = require('../solutions/006.js');
  var helpers = require('../solutions/helpers.js');
  var testVars = require('./testVars.js');

    describe('Problem 6', function() {
    it('should sum the squares of the first ten natural numbers', function() {
      assert.equal(exports.sumSquares(testVars.oneThruTen), 385);
    });
    it('should square the sum of the first ten natural numbers', function() {
      assert.equal(exports.squareSum(testVars.oneThruTen), 3025);
    });
    it('should find the difference between the sum of the squares of the first ten natural numbers and the square of their sum', function() {
      assert.equal(exports.squareSumDiff(testVars.oneThruTen), 2640);
    });
    it('should find the difference between the sum of the squares of the first one hundred natural numbers and the square of their sum', function() {
      assert.equal(exports.squareSumDiff(testVars.oneThruOneHundred), 25164150);
    });
  });

})();
