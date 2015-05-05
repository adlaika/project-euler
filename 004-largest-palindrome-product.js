var reverse = function (s) {
  return s.split('').reverse().join('');
};

var isPalindrome = function (n) {
  n = n.toString();
  var rev = reverse(n);
  return n === rev;
};

var threeDigitProducts = function () {
  var products = [];
  for (var i = 999; i > 0; i--) {
    for (var j = 999; j > i; j--) {
      products.push(i * j);
    }
  }
  return products;
};

var largestPalindrome = function (arr) {
  var largest = 0;
  arr.forEach(function (n) {
    if (isPalindrome(n) && n > largest) {
      largest = n;
    }
  });
  return largest;
};

console.log(largestPalindrome(threeDigitProducts()));
