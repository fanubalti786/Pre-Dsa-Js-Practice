let prompt = require("prompt-sync")();
let arr = new Array(5);
for(let i=0; i<arr.length; i++)
{
    arr[i] = +prompt("Enter your array numbers: ");
}
let max = arr[0];
let min = arr[0];



// for minimum value in array
for(let i=0; i<arr.length; i++)
{
    if(arr[i] > max)
    {
        max = arr[i];
    }
}

console.log(max);



// for minimum value in array
for(let i=0; i<arr.length; i++)
{
    if(arr[i] < min)
    {
        min = arr[i];
    }
}

console.log(min);
