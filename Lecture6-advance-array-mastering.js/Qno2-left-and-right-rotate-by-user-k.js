// left rotation with ascending
let prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5, 6];
let k = +prompt("Enter the value of k: ");
k = k % arr.length;

for (let j = 0; j < k; j++) {
  let fval = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = fval;
}

console.log(arr);

// right rotation with descending but ascending not possible

let arr1 = [1, 2, 3, 4, 5, 6];

for (let j = k; j >= 1; j--) {
  let fval1 = arr1[arr1.length - 1];

  for (let i = arr1.length - 1; i > 0; i--) {
    arr1[i] = arr1[i - 1];
  }
  arr1[0] = fval1;
}

console.log(arr1);
