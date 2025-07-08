let arr = [3,-5,9,-4,-6,0];
let j=0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i]<0)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
}

console.log(arr);