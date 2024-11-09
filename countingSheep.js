function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
// or
function countingSheep(arr){
  let sum = 0;
  arr.filter((i)=> i === true? sum+= 1: sum+=0);
  return sum;
}
