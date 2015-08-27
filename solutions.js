(function (exports) {
  'use strict';

  //problem 5
  exports.smallestDivisibleByArr = function (arr) {
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
  exports.sumSquares = function (arr) {
    return arr.reduce(function (total, current) {
      return total + (current * current);
    });
  };

  exports.squareSum = function (arr) {
    var sum = arr.reduce(function (total, current) {
      return total + current;
    });
    return sum * sum;
  };

  exports.squareSumDiff = function (arr) {
    return exports.squareSum(arr) - exports.sumSquares(arr);
  }

  //problem 7
  exports.getNextPrime = function (n) {
    for (n; !exports.isPrime(n); n++) {};
    return n;
  };

  exports.getPrimes = function (numOfPrimes) {
    var results = [];
    for (var i = 0; results.length < numOfPrimes; i++) {
      if (exports.isPrime(i)) {
        results.push(i);
      }
    };
    return results;
  };

  //problem 8
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
    var nums = exports.numToArr(str);
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
