const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  s2 = s2.split('')
  for (let i = 0; i < s1.length; i++) {
    for (let a = 0; a < s2.length; a++) {
      if (s1[i] == s2[a]) {
        sum++;
        s2.splice(a, 1);
        break;
      }
    }
  }
  return sum
}
module.exports = {
  getCommonCharacterCount
};
