function middleChar(str){
  let len = str.length;
  let mid = Math.floor(len/2);
  return len % 2 === 1 ? str[mid] : str[mid-1] + str[mid] ;
}
console.log(middleChar("test"));
console.log(middleChar("testing"));
