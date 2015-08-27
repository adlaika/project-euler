exports.numToArr = function (n) {
  return (n + '').split('').map(Number);
};

exports.isPrime = function (n) {
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

exports.range = function (start, stop) {
  var result = [];
  for (var i = start; i <= stop; i++) {
    result.push(i);
  };
  return result;
};

exports.reverse = function (s) {
  return s.split('').reverse().join('');
};

exports.isPalindrome = function (n) {
  n = n.toString();
  var rev = exports.reverse(n);
  return n === rev;
};

exports.threeDigitProducts = function () {
  var products = [];
  for (var i = 999; i > 0; i--) {
    for (var j = 999; j > i; j--) {
      products.push(i * j);
    }
  }
  return products;
};
