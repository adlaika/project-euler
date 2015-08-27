(function(exports) {
  'use strict';

  exports.smallestDivisibleByArr = function(arr) {

    var gcd = function(a, b) {
      return (!b) ? a : gcd(b, a % b);
    };

    var lcm = function(a, b) {
      return (a * b) / gcd(a, b);
    }

    return (arr.reduce(function(a, b) {
      return lcm(a, b);
    }));
  };

})(this);
