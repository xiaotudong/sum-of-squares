'use strict';

function printQuadraticSum(inputs) {
  const oddNumbers = buildOddNumbers(inputs);
  const oddNumberSquares = buildOddNumberSquares(oddNumbers);
  const sumOfSquares = buildSumOfSquares(oddNumberSquares);

  console.log(sumOfSquares);
}

function buildOddNumbers(inputs) {
    return inputs.filter(input => input % 2 ===1);
}

function buildOddNumberSquares(oddNumbers) {
  return  oddNumbers.map(oddNumber => Math.pow(oddNumber,2));
}

function buildSumOfSquares(oddNumberSquares) {
  return oddNumberSquares.reduce((prv,next) => {
    return prv + next;
  })
}

