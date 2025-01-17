// Solution 1
const solution = (strA, strB) => strA.endsWith(strB);

//Solution 2
function solution(str, ending){
  return str.endsWith(ending);
}

//Solution 3
function solution(str1, str2){
  return str1.includes(str2) && str1.length - str2.length === str1.lastIndexOf(str2) ? true : false;
}

console.log(solution('abc', 'd')); // returns false
console.log(solution('lacey', 'ey')); // returns true
console.log(solution('lace', 'ey')); // returns false
