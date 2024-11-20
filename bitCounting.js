/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
// Answer 1
countBits = n => n.toString(2).split('0').join('').length;

// Answer 2
var countBits = function(n) {
  let binary = n.toString(2);
  let result = 0;
  for (let char of binary){
    char === '1' ? result += 1 : result -= 0;
  }
  return result
};
