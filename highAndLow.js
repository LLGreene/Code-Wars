// My Initial Solution
function highAndLow(numbers){
  let arr = numbers.split(' ');
  arr.sort((a,b) => a-b);
  return arr.at(-1) + " " + arr[0]   
}
// Refractored 2
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// 3
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// 4
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//
function highAndLow(numbers) {
    let arr = numbers.split(' ').map(Number);
    let max = -Infinity;
    let min = Infinity;

    for (let num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    return `${max} ${min}`;
}
