(function () {
  'use strict';

  var PE = {}; //for export

  //helper functions
  PE.reverse = function (s) {
    return s.split('').reverse().join('');
  };

  PE.isPalindrome = function (n) {
    n = n.toString();
    var rev = PE.reverse(n);
    return n === rev;
  };

  PE.threeDigitProducts = function () {
    var products = [];
    for (var i = 999; i > 0; i--) {
      for (var j = 999; j > i; j--) {
        products.push(i * j);
      }
    }
    return products;
  };

  //problem 2
  PE.addEvenFibonacciSums = function (upperLimit, term1, term2, sum) {
    term1 = term1 || 0;
    term2 = term2 || 1;
    sum = sum || 0;

    if ((term1 + term2) > upperLimit) {
      return sum;
    } else {
      if ((term1 + term2) % 2 === 0) {
        sum += term1 + term2;
      }
      return PE.addEvenFibonacciSums(upperLimit, term2, (term1 + term2), sum);
    }
  };

  //problem 003
  PE.primeFactors = function (n) {
    var factors = [];

    for (var i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }

    return factors;
  };

  //problem 004
  PE.largestPalindrome = function (arr) {
    var largest = 0;
    arr.forEach(function (n) {
      if (PE.isPalindrome(n) && n > largest) {
        largest = n;
      }
    });
    return largest;
  };

  //problem 005
  PE.smallestDivisibleByArr = function (arr) {
    var isDivisibleByArr = function (num, arr) {
      var divisible = true;
      arr.forEach(function (x) {
        if (num % x !== 0) {
          divisible = false;
        }
      });
      return divisible;
    };

    for (var i = 2; true; i++) {
      if (isDivisibleByArr(i, arr)) {
        return i;
      }
    }
  };

  module.exports = PE;

})();
