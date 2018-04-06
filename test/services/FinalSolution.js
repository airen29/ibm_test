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
    it('should return 0 when given param is 2', () => {
      expect(FinalSolution.getSolution(2)).to.deep.equal(0);
    });
    it('should return 2 when given param is 3', () => {
      expect(FinalSolution.getSolution(3)).to.deep.equal(2);
    });
    it('should return 3 when given param is 4', () => {
      expect(FinalSolution.getSolution(4)).to.deep.equal(3);
    });
    it('should return 11 when given param is 5', () => {
      expect(FinalSolution.getSolution(5)).to.deep.equal(11);
    });
    it('should return 49 when given param is 6', () => {
      expect(FinalSolution.getSolution(6)).to.deep.equal(49);
    });
  });
});
