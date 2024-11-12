function exes(str){
  const arr = str.toLowerCase().split('');
  return arr.filter(i => i === 'x').length === arr.filter(i => i === 'o').length;
}
