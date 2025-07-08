// left rotation
let arr = [1,2,3,4,5,6];

let fval = arr[0];

for(let i = 0; i < arr.length-1; i++)
{
    arr[i] = arr[i+1];
}

arr[arr.length-1] = fval;

console.log(arr);


// right rotation
let arr1 = [1,2,3,4,5,6];

let fval1 = arr1[arr1.length-1];

for(let i = arr1.length-1; i >0; i--)
{
    arr1[i] = arr1[i-1];
}

arr1[0] = fval1;
console.log(fval1)
console.log(arr1);