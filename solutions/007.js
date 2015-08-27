(function(exports) {
  'use strict';

  var helpers = require('../solutions/helpers.js');

  exports.getNextPrime = function(n) {
    for (n; !helpers.isPrime(n); n++) {};
    return n;
  };

  exports.getPrimes = function(numOfPrimes) {
    var results = [];
    for (var i = 0; results.length < numOfPrimes; i++) {
      if (helpers.isPrime(i)) {
        results.push(i);
      }
    };
    return results;
  };

})(this);
