const {assert} = require('chai');
const {expect} = require('chai');

const FinalSolution = require('../../services/FinalSolution.js');

describe('FinalSolution', () => {
  it('exists', () => {
    assert.exists(FinalSolution, 'FinalSolution is neither `null` nor `undefined`');
  });

  describe('getSolution', () => {
    it('should export FinalSolution.getSolution() function', () => {
      expect(FinalSolution.getSolution).to.be.a('function');
    });
  });
});
