// Correct the error preventing the following code from working
function multiply(a, b){
 a * b
}

// Solution 1
function multiply(a, b){
  return a * b
}

// Solution 2
multiply = (a, b) => a * b;
