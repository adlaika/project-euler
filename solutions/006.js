(function(exports) {
  'use strict';

  var helpers = require('../solutions/helpers.js');

  exports.sumSquares = function(arr) {
    return arr.reduce(function(total, current) {
      return total + (current * current);
    });
  };

  exports.squareSum = function(arr) {
    var sum = arr.reduce(function(total, current) {
      return total + current;
    });
    return sum * sum;
  };

  exports.squareSumDiff = function(arr) {
    return exports.squareSum(arr) - exports.sumSquares(arr);
  }

})(this);
