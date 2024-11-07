function digitalRoot(num){
  sum =  String(num).split('').reduce((i,n) => i + Number(n), 0);
  return sum > 9 ? digitalRoot([sum]): sum;
}

console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
