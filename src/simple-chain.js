const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value !== '' ? this.chain.push(`( ${value} )`) : this.chain.push('()');
    return this;
  },

  removeLink(position) {
    if (!isFinite(position) || position >= this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = [];

    this.chain.forEach(el => {
      res.push(el);
    });

    this.chain = []; 
    return res.join('~~');

  }
};

module.exports = {
  chainMaker
};