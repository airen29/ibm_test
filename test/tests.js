const expect = require('chai').expect;
const assert = require('chai').assert;

const NumberHelper = require('../services/NumberHelper.js');

describe('NumberHelper', () => {
  it('exists', () => {
      assert.exists(NumberHelper, 'NumberHelper is neither `null` nor `undefined`');
  });

  it('should export generatePrimeNumbers function', () => {
      expect(NumberHelper.generatePrimeNumbers).to.be.a('function');
  });

  describe('call generatePrimeNumbers', () => {
    it('returns [ 2 ] with param 1', () => {
      expect(NumberHelper.generatePrimeNumbers(1)).to.deep.equal([2]);
    });
  });
});
