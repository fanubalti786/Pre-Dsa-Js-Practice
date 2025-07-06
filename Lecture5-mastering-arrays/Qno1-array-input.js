let prompt = require("prompt-sync")();
let arr = new Array(5);

for(let i=0; i<arr.length; i++)
{
    arr[i] = prompt("Enter the number: ");
}

console.log(arr);