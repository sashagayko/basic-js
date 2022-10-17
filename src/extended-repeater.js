const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str + '';
  let addition = options.addition + '';
  addition === 'undefined' ? addition = '' : true;
  let repeatTimes = options.repeatTimes || 1
  let separator = options.separator || '+'
  let additionSeparator = options.additionSeparator || '|'
  let additionRepeatTimes = options.additionRepeatTimes || 1
  let result = [];
  let additionArr = [];
  for (let a = 0; a < additionRepeatTimes; a++) {
    additionArr.push(addition)
  }
  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + additionArr.join(`${additionSeparator}`))
  }
  return result.join(`${separator}`)
}

module.exports = {
  repeater
};
