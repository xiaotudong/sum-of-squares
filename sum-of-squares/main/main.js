'use strict';

function printQuadraticSum(inputs) {
  const oddNumbers = buildOddNumbers(inputs);
  const oddNumberSquares = buildOddNumberSquares(oddNumbers);
  const sumOfSquares = buildSumOfSquares(oddNumberSquares);

  console.log(sumOfSquares);
}

function buildOddNumbers(inputs) {
  const oddNumbers = [];

  for (const input of inputs){
    if(parseInt(input) % 2 != 0){
      oddNumbers.push(input);
    }
  }
  return oddNumbers;
}

function buildOddNumberSquares(oddNumbers) {
  return  oddNumbers.map(oddNumber => Math.pow(oddNumber,2));
}

function buildSumOfSquares(oddNumberSquares) {
  let sumOfSquares = 0;

  for (const oddNumberSquare of oddNumberSquares){
    sumOfSquares += oddNumberSquare;
  }
  return sumOfSquares;
}

