// MOST EFFICIENT 
function removeChar(str) {
  return str.slice(1, -1);
}

// SOLUTION 2
function removeChar(str){
 let arr = str.split('')
  arr.pop()
  arr.shift()
  return arr.join('')
};
