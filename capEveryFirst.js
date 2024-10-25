// NOT ACTUALLY A CODE WAR. I was just annoyed that google sheets didn't have a shortcut for when I need this.

// SOLUTION1 
function capIt(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}; console.log(capIt('we da best'));

// Solution2
function capFirstChar(str){
  let newArr = [];
  let arr = str.split(' ');
  for (let i=0; i < arr.length; i++){
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  } return newArr.join(' ');
}; console.log(capFirstChar('Their roles in the body and foods rich in each!'));

