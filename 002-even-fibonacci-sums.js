(function () {
  'use strict';

  var fibs = [1, 2];

  while (fibs[fibs.length - 1] <= 4000000) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  };

  var sum = 0;

  for (var i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 == 0) {
      sum += fibs[i];
    }
  };

  console.log(sum);
  return sum;

})();
