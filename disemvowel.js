function disemvowel(str) {
// initialize a string of all values that should be removed
  let vowels = 'AEIOUaeiou';
  let arr = [];
  for (let i = 0; i < str.length; i++){
    // use ! with the .includes method to set a condition that only pushes str[i] if the str[i] is NOT included in vowels
    if (!vowels.includes(str[i])){
      arr.push(str[i]);
    }
  }
  return arr.join('');
}
