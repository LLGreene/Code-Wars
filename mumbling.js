// Solution 1
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// Solution 2
let arr = str.toLowerCase().split('');
  let result = [];
  for (let i=0; i < arr.length; i++){
    let word = arr[i].repeat(result.length+1);
    result.push(word[0].toUpperCase() + word.slice(1))
  }
  return result.join('-');

accum("abcd") // "A-Bb-Ccc-Dddd"
accum("RqaEzty") // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") // "C-Ww-Aaa-Tttt"
