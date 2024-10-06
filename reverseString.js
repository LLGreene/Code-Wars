// MOST EFFICIENT SOLUTION
function reverse(str) {
  return str.split('').reverse().join('');
}

// SOLUTION 2
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


//SOLUTION 3
function reverse(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++){
      arr.unshift(str[i]);
  }
  return arr.join('');
}
console.log(reverse('Lacneafdsfhjgk ayoiho'));
