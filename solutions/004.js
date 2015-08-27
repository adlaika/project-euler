(function(exports) {
  'use strict';

  var helpers = require('../solutions/helpers.js');

  exports.largestPalindrome = function(arr) {
    var largest = 0;
    arr.forEach(function(n) {
      if (helpers.isPalindrome(n) && n > largest) {
        largest = n;
      }
    });
    return largest;
  };

})(this);
