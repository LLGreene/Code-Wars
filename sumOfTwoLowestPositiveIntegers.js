const lowSum = (arr) =>{
  let sum = arr.sort((a,b)=> a-b).filter(num => num > 0);
  return sum[0] + sum[1];
}
console.log(lowSum([-19, -20, 19, 5, 42, 2, 77])); //7
