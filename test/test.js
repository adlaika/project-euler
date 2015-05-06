var assert = require("assert");
var PE = require("../solutions.js");

describe('Project Euler', function () {
  describe('Problem 2', function () {
    it('should have an addEvenFibonacciSums method', function () {
      assert.equal(typeof PE, 'object');
      assert.equal(typeof PE.addEvenFibonacciSums, 'function');
    });
    it('addEvenFibonacciSums(4000000) should equal 4613732', function () {
      var result = PE.addEvenFibonacciSums(4000000);
      console.log(result);
      assert.equal(result, 4613732);
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

  });
  describe('Problem 5', function () {

  });
});
