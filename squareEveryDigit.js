// MOST EFFICIENT
function squareDigits(num) {
  return Number(String(num).split('').map(elm => elm ** 2).join(''));
}


// Solution 2
function squareDigits(num){
  let newArr = [];
  let arrNum = String(num).split('');
  for (const elm of arrNum){
    newArr.push(elm**2)
  } return Number(newArr.join(''))
}
