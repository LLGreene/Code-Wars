function createPhoneNumber(arr){
  let areaCode = arr.slice(0,3)
  let firstSet = arr.slice(3,6)
  let secondSet = arr.slice(6)
  return `(${areaCode.join('')}) ${firstSet.join('')}-${secondSet.join('')}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
// OPTION 2
function createPhoneNumber(arr) {
  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => "(123) 456-7890"
