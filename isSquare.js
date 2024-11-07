// return whether the number has a square root (true) or not (false)

function squareIt(x){
 return Number.isInteger(Math.sqrt(x))
}
console.log(squareIt(13));
console.log(squareIt(25));

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
