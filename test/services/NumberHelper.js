const {assert} = require('chai');
const {expect} = require('chai');

const NumberHelper = require('../../services/NumberHelper.js');

describe('NumberHelper', () => {
  it('exists', () => {
    assert.exists(NumberHelper, 'NumberHelper is neither `null` nor `undefined`');
  });

  describe('isPrime', () => {
    it('should export NumberHelper.isPrime() function', () => {
      expect(NumberHelper.isPrime).to.be.a('function');
    });

    it('returns "false" with param 1', () => {
      expect(NumberHelper.isPrime(1)).equal(false);
    });

    it('returns "true" with param 2', () => {
      expect(NumberHelper.isPrime(2)).equal(true);
    });

    it('returns "true" with param 17', () => {
      expect(NumberHelper.isPrime(17)).equal(true);
    });

    it('returns "false" with param 18', () => {
      expect(NumberHelper.isPrime(18)).equal(false);
    });
  });

  describe('generatePrimeNumbers', () => {
    it('should export NumberHelper.generatePrimeNumbers() function', () => {
      expect(NumberHelper.generatePrimeNumbers).to.be.a('function');
    });

    it('returns [ 2 ] with param 1', () => {
      expect(NumberHelper.generatePrimeNumbers(1)).to.deep.equal([2]);
    });
  });
});
