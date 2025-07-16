let arr = [1,1,2,2];
let ans = arr[0];
let count = 1;

for (let i = 1; i < arr.length; i++) {
  if (count !== 0 && ans === arr[i]) {
    count++;
  } else {
    if (count === 0) {
      ans = arr[i];
      count++;
    } else {
      count--;
    }
  }
}

console.log(ans);
