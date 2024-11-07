function reverseFive(str){
  return str.split(' ').map(i => i.length>4 ? i.split('').reverse().join('') : i).join(' ')
}
console.log(reverseFive("Hey five apple fellow warriors"));
