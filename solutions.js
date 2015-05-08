(function () {
  'use strict';

  var PE = {}; //for export

  //helper functions
  PE.numToArr = function (n) {
    return (n + '').split('').map(Number);
  };

  PE.isPrime = function (n) {
    if (n === 0 || n === 1) {
      return false;
    }
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  PE.range = function (start, stop) {
    var result = [];
    for (var i = start; i <= stop; i++) {
      result.push(i);
    };
    return result;
  };

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

  //problem 5
  PE.smallestDivisibleByArr = function (arr) {
    var gcd = function (a, b) {
      return (!b) ? a : gcd(b, a % b);
    };

    var lcm = function (a, b) {
      return (a * b) / gcd(a, b);
    }

    return (arr.reduce(function (a, b) {
      return lcm(a, b);
    }));
  };

  //problem 6
  PE.sumSquares = function (arr) {
    return arr.reduce(function (total, current) {
      return total + (current * current);
    });
  };

  PE.squareSum = function (arr) {
    var sum = arr.reduce(function (total, current) {
      return total + current;
    });
    return sum * sum;
  };

  PE.squareSumDiff = function (arr) {
    return PE.squareSum(arr) - PE.sumSquares(arr);
  }

  //problem 7
  PE.getNextPrime = function (n) {
    for (n; !PE.isPrime(n); n++) {};
    return n;
  };

  PE.getPrimes = function (numOfPrimes) {
    var results = [];
    for (var i = 0; results.length < numOfPrimes; i++) {
      if (PE.isPrime(i)) {
        results.push(i);
      }
    };
    return results;
  };

  //problem 8
  PE.getAdjDigits = function (numOfDigits, start, number) {
    var result = "";
    for (var i = start; i < start + numOfDigits; i++) {
      result = result + number[i];
    }
    return result;
  };

  PE.getGreatestAdjDigits = function (n, number) {

  };

  module.exports = PE;
})();
