var addEvenFibonacciSums = function (upperLimit, term1, term2, sum) {
  term1 = term1 || 0;
  term2 = term2 || 1;
  sum = sum || 0;

  if ((term1 + term2) > upperLimit) {
    console.log(sum);
    return sum;
  } else {
    if ((term1 + term2) % 2 === 0) {
      sum += term1 + term2;
    }
    addEvenFibonacciSums(upperLimit, term2, (term1 + term2), sum);
  }
};

addEvenFibonacciSums(4000000);
