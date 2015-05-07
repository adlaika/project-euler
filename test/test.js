var assert = require('assert');
var PE = require('../solutions.js');

describe('Project Euler', function () {
  var oneThruTen = PE.range(1, 10);
  var oneThruOneHundred = PE.range(1, 100);
  describe('Problem 2', function () {
    it('should have an addEvenFibonacciSums method', function () {
      assert.equal(typeof PE, 'object');
      assert.equal(typeof PE.addEvenFibonacciSums, 'function');
    });
    it('addEvenFibonacciSums(4000000) should equal 4613732', function () {
      assert.equal(PE.addEvenFibonacciSums(4000000), 4613732);
    });
  });
  describe('Problem 3', function () {
    it('should have a primeFactors method', function () {
      assert.equal(typeof PE.primeFactors, 'function');
    });
    it('the final element in primeFactors(600851475143) should equal 6857', function () {
      var results = PE.primeFactors(600851475143);
      assert.equal(results[results.length - 1], '6857');
    });
  });
  describe('Problem 4', function () {
    it('should have a largestPalindrome method', function () {
      assert.equal(typeof PE.largestPalindrome, 'function');
    });
    it('the answer should be 906609', function () {
      assert.equal(PE.largestPalindrome(PE.threeDigitProducts()), 906609);
    });
  });
  describe('Problem 5', function () {
    it('should have a smallestDivisibleByArr method', function () {
      assert.equal(typeof PE.smallestDivisibleByArr, 'function');
    });
    it('smallestDivisibleByArr([1...10]) should equal 2520', function () {
      assert.equal(PE.smallestDivisibleByArr(oneThruTen), 2520);
    });
    it('the answer should be 232792560', function () {
      var oneThruTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      assert.equal(PE.smallestDivisibleByArr(oneThruTwenty), '232792560');
    });
  });
  describe('Problem 6', function () {
    it('should sum the squares of the first ten natural numbers', function () {
      assert.equal(PE.sumSquares(oneThruTen), 385);
    });
    it('should square the sum of the first ten natural numbers', function () {
      assert.equal(PE.squareSum(oneThruTen), 3025);
    });
    it('should find the difference between the sum of the squares of the first ten natural numbers and the square of their sum', function () {
      assert.equal(PE.squareSumDiff(oneThruTen), 2640);
    });
    it('should Find the difference between the sum of the squares of the first one hundred natural numbers and the square of their sum', function () {
      assert.equal(PE.squareSumDiff(oneThruOneHundred), 25164150);
    });

  });
});
