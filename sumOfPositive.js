// MOST EFFICIENT
function positiveSum(arr) {
  return arr.reduce((total, item) => item > 0 ? total + item : total, 0);
}
/*
The .reduce() function iterates through an array and returns a value based on that iteration. 
It takes two parameters. The first parameter's callback funciton. The second parameter is the initial value.
The callback function takes two parameters. The first is the inital value and the second is the current element being processed in the array.
*/

//SOLUTION 2
function positiveSum(arr) {
  let total = 0;
  for (const item of arr){
    item > 0 ? total += item : total;
  } return total
}
