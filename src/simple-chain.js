const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (position - 1 < 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    let arr = [];
    this.chain.map(el => arr.unshift(el))
    this.chain = arr;
    return this
  },
  finishChain() {
    let result = this.chain.map(el => `( ${el} )`).join('~~')
    this.chain = []
    return result
  }

};

module.exports = {
  chainMaker
};
