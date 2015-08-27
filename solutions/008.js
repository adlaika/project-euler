(function (exports) {
  'use strict';

  var helpers = require('../solutions/helpers.js');

  exports.getAdjDigits = function (numOfDigits, start, number) {
    var start = start || 0;
    var result = "";
    for (var i = start; i < start + numOfDigits; i++) {
      if (number[i] !== undefined) {
        result = result + number[i];
      }
    }
    return result;
  };

  //exports.getPossibleAdjDigits(2, "012034506") ==> ['12', '34', '45', '6']
  exports.getPossibleAdjDigits = function (numOfDigits, number) {
    var possibles = [];
    for (var i = 0; i < number.length + 1 - numOfDigits; i++) {
      var currentAdjDigits = exports.getAdjDigits(numOfDigits, i, number);
      if (currentAdjDigits.indexOf(0) === -1) {
        possibles.push(currentAdjDigits);
      }
    }
    return possibles;
  };

  exports.multiplyDigits = function (str) {
    var nums = helpers.numToArr(str);
    return nums.reduce(function (total, mult) {
      return total *= mult;
    });
  };

  exports.getDigitsWithGreatestSum = function (arr) {
    var resultIndex = -1;
    var sums = arr.map(exports.multiplyDigits)
    var biggest = 0;
    sums.reduce(function (prev, curr) {
      if (prev > biggest) {
        biggest = prev;
      } else if (curr > biggest) {
        biggest = curr;
      }
    });
    resultIndex = sums.indexOf(biggest);
    return arr[resultIndex];
  };
})(this);
