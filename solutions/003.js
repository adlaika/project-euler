(function(exports) {
  'use strict';

  exports.primeFactors = function(n) {
    var factors = [];

    for (var i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }

    return factors;
  };

})(this);
