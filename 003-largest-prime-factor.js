var num = 600851475143;

var isPrime = function (x) {
  for (var i = 2; i <= Math.ceil(x / 2); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

var largestPrimeFactor = function (n) {
  for (var i = 2; i < Math.ceil(n / 2); i++) {
    if (n % i === 0 && isPrime(i)) {
      largestPrimeFactor(i);
    }
  }
  console.log("prime factor: " + n);
  return n;
};

largestPrimeFactor(num);
