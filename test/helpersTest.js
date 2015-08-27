var assert = require('assert');
var exports = require('../solutions/helpers.js');

describe('Helper functions', function () {
  it('isPrime should correctly identify prime numbers', function () {
    assert.equal(exports.isPrime(0), false);
    assert.equal(exports.isPrime(1), false);
    assert.equal(exports.isPrime(2), true);
    assert.equal(exports.isPrime(4), false);
    assert.equal(exports.isPrime(9), false);
    assert.equal(exports.isPrime(11), true);
  });
  it('numToArr should convert integers to arrays of single digits', function () {
    assert.deepEqual(exports.numToArr(12345), [1, 2, 3, 4, 5]);
  });
});
