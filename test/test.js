var assert = require('assert');
var PE = require('../solutions.js');

describe('Project Euler', function () {
  var oneThruTen = PE.range(1, 10);
  var oneThruOneHundred = PE.range(1, 100);

  describe('Helper functions', function () {
    it('isPrime should correctly identify prime numbers', function () {
      assert.equal(PE.isPrime(0), false);
      assert.equal(PE.isPrime(1), false);
      assert.equal(PE.isPrime(2), true);
      assert.equal(PE.isPrime(4), false);
      assert.equal(PE.isPrime(9), false);
      assert.equal(PE.isPrime(11), true);
    });
    it('numToArr should convert integers to arrays of single digits', function () {
      assert.deepEqual(PE.numToArr(12345), [1, 2, 3, 4, 5]);
    });
  });

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
    it('should find the difference between the sum of the squares of the first one hundred natural numbers and the square of their sum', function () {
      assert.equal(PE.squareSumDiff(oneThruOneHundred), 25164150);
    });
  });

  describe('Problem 7', function () {
    it('should return the next highest prime', function () {
      assert.equal(PE.getNextPrime(1), 2);
      assert.equal(PE.getNextPrime(10), 11);
      assert.equal(PE.getNextPrime(12), 13);
    });
    it('should return the first n primes', function () {
      assert.deepEqual(PE.getPrimes(6), [2, 3, 5, 7, 11, 13]);
      assert.deepEqual(PE.getPrimes(1), [2]);
      assert.deepEqual(PE.getPrimes(0), []);
    });
    it('should produce the 10001st prime', function () {
      var primes = PE.getPrimes(10001);
      assert.equal(primes[10000], 104743);
    });
  });

  describe('Problem 8', function () {

    var bigNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

    it('should return an array of n adjacent digits at index', function () {
      assert.equal(PE.getAdjDigits(1, 0, bigNum), 7);
      assert.equal(PE.getAdjDigits(4, 3, bigNum), 6717);
      assert.equal(PE.getAdjDigits(4, 4, "12345"), 5);
    });
    it('should return all possible adjacent digit combinations without 0', function () {
      assert.deepEqual(PE.getPossibleAdjDigits(1, "12"), ['1', '2']);
      assert.deepEqual(PE.getPossibleAdjDigits(0, "12"), ['']);
      assert.deepEqual(PE.getPossibleAdjDigits(1, "0000"), []);
      assert.deepEqual(PE.getPossibleAdjDigits(2, "012034506"), ['12', '34', '45', '6', '']);
    });
    it('should add digits', function () {
      assert.equal(PE.addDigits('123'), 6);
      assert.equal(PE.addDigits('0'), 0);
    });
    it('should find the n adjacent digits with the greatest sum', function () {
      //assert.equal(PE.greatestDigitSum([12, 34, 56, 78]), 78);
    });
  });
});
