
let arr = [1,2,3,4,5,6,7,8,9];
let i=0, j=arr.length-1;
while(i!==j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;

}

console.log(arr);




// revers imple without involvement of user 
let arr1 = [];

for(let i=1; i<=arr1; i++)
{
    arr.unshift(i)
}


console.log(arr);