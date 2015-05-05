var num = 600851475143;

var primeFactors = function (n) {
  var factors = [];

  for (var i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  return factors;
};

var result = primeFactors(num);

console.log(result[result.length - 1]);
