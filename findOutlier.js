// Solution 1
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

// Solution 2
const findOutlier = (arr) =>{
  const even = [];
  const odd = [];
  arr.forEach(num => num % 2 === 0 ? even.push(num) : odd.push(num));
  return even.length < odd.length ? even[0] : odd[0] ;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // -->  11 (the only odd number);
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // --> 160 (the only even number);
