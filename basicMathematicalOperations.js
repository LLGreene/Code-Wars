// Solution 1
function mathOperations(o, a, b) {
  return eval(a+o+b);
}

// Solution 2
const mathOperation = (str, num1, num2) => {
  switch(str){
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;
  }
}

console.log(mathOperations('+', 4, 7)) // --> 11
console.log(mathOperations('-', 15, 18)) // --> -3
console.log(mathOperations('*', 5, 5)) // --> 25
console.log(mathOperations('/', 49, 7)) // --> 7
