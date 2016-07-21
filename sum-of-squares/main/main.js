'use strict';

function printQuadraticSum(inputs) {

  const sumOfSquares = inputs.filter(input => input % 2 ===1)
      .map(oddNumber => Math.pow(oddNumber,2))
      .reduce((prv,next) => {
         return prv + next;
  })
  console.log(sumOfSquares);
}



