function findOdd(arr) {
  for (let i=0; i < arr.length; i++){
    let newArr = arr.filter(elm => elm === arr[i]);
    if (newArr.length % 2 !== 0){
      return arr[i];
    }
  }
}
