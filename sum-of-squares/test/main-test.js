'use strict';

describe('sumOfSquares',function () {
  describe('buildOddNUmbers',function () {
    const inputs = [1,2,3,4,5];
    it('getOddNumber',function () {
      const oddNumbers = buildOddNumbers(inputs);
      const expectText = [1,3,5];
      expect(oddNumbers).toEqual(expectText);
    });
  });

  describe('buildOddNUmberSquares',function () {
    const oddNumbers = [1,3,5];
    it('getOddNumberSquares',function () {
      const oddNumberSquares = buildOddNumberSquares(oddNumbers);
      const expectText = [1,9,25];
      expect(oddNumberSquares).toEqual(expectText);
    });
  });

  describe('buildSumOfSquares',function () {
    const oddNumberSquares = [1,9,25];
    it('getOddNumber',function () {
      const sumOfSquares = buildSumOfSquares(oddNumberSquares);
      const expectText = 35;
      expect(sumOfSquares).toEqual(expectText);
    });
  });

  describe('buildOddNUmbers',function () {
    const inputs = [1,2,3,4,5];
    it('getOddNumber',function () {
      spyOn(console, 'log');
      printQuadraticSum(inputs);
      const expectText = 35;
      expect(console.log).toHaveBeenCalledWith(expectText);
    });
  });
});
