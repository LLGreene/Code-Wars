//Given a string return the length of the shortest word(s)

function findShort(str){
  let arr = str.split(' ')
  return Math.min(...arr.map(word => word.length));
}

// Now return the word(s) with the shortest length

function shortie(str){
  let arr = str.split(' ')
  let minLength = Math.min(...arr.map(word => word.length));
  return arr.filter(word => word.length === minLength);
}
console.log(shortie("big bigger biggest cat catter bag cattest dog"))

/* 
arr.map(word => word.length) creates an array of the lengths of all words in the string.
Math.min(...arr.map(...)) finds the shortest word length.
arr.filter(word => word.length === minLength) filters all the words that have the shortest length.
The result will be an array of words that are the shortest in length.
*/
