function smallestInt(arr){
  return (arr.sort((a,b) => a - b))[0]
}
console.log(smallestInt([34, -345, -1, 100]))
