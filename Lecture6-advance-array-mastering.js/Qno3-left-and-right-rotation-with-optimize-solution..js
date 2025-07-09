let prompt = require("prompt-sync")();
let arr = [1,2,3,4,5,6];
let temp = new Array(arr.length);


let k = +prompt("Enter the value of k: ");
k = k % arr.length;

// left rotation
for(let i=0; i<arr.length; i++)
{
    temp[i] = arr[(i+k) % arr.length];

}

console.log(temp);



// right rotation with ascending method
let temp1 = new Array(arr.length);

for(i=0; i<arr.length; i++)
{
    // temp1[(i+k) % arr.length] = arr[i];
    temp1[(i+k) % arr.length] = arr[i];

}
console.log(temp1);



// right rotation with descending method
let temp2 = new Array(arr.length);

for(i=arr.length-1; i>=0; i--)
{
    // temp1[(i+k) % arr.length] = arr[i];
    temp2[(i+k) % arr.length] = arr[i];

}
console.log(temp2);

