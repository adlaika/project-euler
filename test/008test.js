(function() {
  'use strict'

  var assert = require('assert');
  var exports = require('../solutions/008.js');
  var helpers = require('../solutions/helpers.js');
  var testVars = require('./testVars.js');

  describe('Problem 8', function() {

    it('should return an array of n adjacent digits at index', function() {
      assert.equal(exports.getAdjDigits(1, 0, testVars.bigNum), 7);
      assert.equal(exports.getAdjDigits(4, 3, testVars.bigNum), 6717);
      assert.equal(exports.getAdjDigits(4, 4, "12345"), 5);
    });
    it('should return all possible adjacent digit combinations without 0', function() {
      assert.deepEqual(exports.getPossibleAdjDigits(1, "12"), ['1', '2']);
      //assert.deepEqual(exports.getPossibleAdjDigits(0, "12"), []);
      //assert.deepEqual(exports.getPossibleAdjDigits(1, "0000"), []);
      assert.deepEqual(exports.getPossibleAdjDigits(2, "012034506"), ['12', '34', '45']);
    });
    it('should add digits', function() {
      assert.equal(exports.multiplyDigits('123'), 6);
      assert.equal(exports.multiplyDigits('0'), 0);
    });
    it('should pick the greatest product from an array of adj digits', function() {
      assert.equal(exports.getDigitsWithGreatestSum([12, 34, 56, 78]), 78);
      assert.equal(exports.getDigitsWithGreatestSum(["01", 0, 0, 0, "00000", 0, 999999, 41, 14, 5252, "00001"]), 999999);
      assert.equal(exports.getDigitsWithGreatestSum([999, 2, 13, 125, 112, 0]), 999);
    });
    it('should find the n adj digits with the greatest product from a number', function() {
      assert.equal(exports.getDigitsWithGreatestSum(exports.getPossibleAdjDigits(2, "012034506")), 45);
      assert.equal(exports.getDigitsWithGreatestSum(exports.getPossibleAdjDigits(4, testVars.bigNum)), 9989);
      //console.log(exports.getDigitsWithGreatestSum(exports.getPossibleAdjDigits(13, bigNum)));
    });
    it('should find the product of the above test', function() {
      assert.equal(exports.multiplyDigits(exports.getDigitsWithGreatestSum(exports.getPossibleAdjDigits(13, testVars.bigNum))), "23514624000");
    });
  });

})();
