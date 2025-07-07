let arr = [0,1,0,1,0,0];
let j=0, temp;
for(let i=0; i<arr.length; i++)
{
    if(arr[i] === 0)
    {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
}

console.log(arr);