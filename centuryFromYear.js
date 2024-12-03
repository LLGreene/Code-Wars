// Solution 1
const century = year => Math.ceil(year/100)

// Solution 2
function century(year){
  let end = String(year).split('').slice(-2).join('');
  let start = Number(String(year).split('').slice(0,2).join(''));
  if(year < 101){
    return 1
  } else if(year > 100 && year < 1000 && end !== "00"){
    return Number(String(year).split('')[0]) + 1;
  }else if(year > 100 && year < 1000 && end === "00"){
    return Number(String(year).split('')[0]);
  } else if (end === "00"){
    return start;
  } else {
    return start + 1
  }
}
