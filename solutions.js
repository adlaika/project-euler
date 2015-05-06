var PE = {}; //for export

//problem 2
PE.addEvenFibonacciSums = function (upperLimit, term1, term2, sum) {
  term1 = term1 || 0;
  term2 = term2 || 1;
  sum = sum || 0;

  if ((term1 + term2) > upperLimit) {
    return sum;
  } else {
    if ((term1 + term2) % 2 === 0) {
      sum += term1 + term2;
    }
    return PE.addEvenFibonacciSums(upperLimit, term2, (term1 + term2), sum);
  }
};

//problem 003
PE.primeFactors = function (n) {
  var factors = [];

  for (var i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  return factors;
};


module.exports = PE;


// //helper functions
// var reverse = function (s) {
//   return s.split('').reverse().join('');
// };

// var isPalindrome = function (n) {
//   n = n.toString();
//   var rev = reverse(n);
//   return n === rev;
// };

// var threeDigitProducts = function () {
//   var products = [];
//   for (var i = 999; i > 0; i--) {
//     for (var j = 999; j > i; j--) {
//       products.push(i * j);
//     }
//   }
//   return products;
// };

// //problem 002
// console.log("Problem 2: ");
// var addEvenFibonacciSums = function (upperLimit, term1, term2, sum) {
//   term1 = term1 || 0;
//   term2 = term2 || 1;
//   sum = sum || 0;

//   if ((term1 + term2) > upperLimit) {
//     console.log(sum);
//     return sum;
//   } else {
//     if ((term1 + term2) % 2 === 0) {
//       sum += term1 + term2;
//     }
//     addEvenFibonacciSums(upperLimit, term2, (term1 + term2), sum);
//   }
// };

// addEvenFibonacciSums(4000000);

// //problem 003
// console.log("Problem 3: ");
// var num = 600851475143;

// var primeFactors = function (n) {
//   var factors = [];

//   for (var i = 2; i <= n; i++) {
//     while (n % i === 0) {
//       factors.push(i);
//       n = n / i;
//     }
//   }

//   return factors;
// };

// var result = primeFactors(num);

// console.log(result[result.length - 1]);

// //problem 004
// console.log("Problem 4: ");
// var largestPalindrome = function (arr) {
//   var largest = 0;
//   arr.forEach(function (n) {
//     if (isPalindrome(n) && n > largest) {
//       largest = n;
//     }
//   });
//   return largest;
// };

// console.log(largestPalindrome(threeDigitProducts()));

// //problem 005
// var oneThruTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var oneThruTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Problem 5: ");

// var smallestDivisibleByArr = function (arr) {
//   var isDivisibleByArr = function (num, arr) {
//     var divisible = true;
//     arr.forEach(function (x) {
//       if (num % x !== 0) {
//         divisible = false;
//       }
//     });
//     return divisible;
//   };

//   for (var i = 2; true; i++) {
//     if (isDivisibleByArr(i, arr)) {
//       return i;
//     }
//   }
// };

// //console.log(smallestDivisibleByArr(oneThruTwenty)); //very slow (several minutes)!
