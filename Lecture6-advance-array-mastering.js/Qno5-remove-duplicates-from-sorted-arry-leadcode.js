let nums = [1,2,3,4,4,4,6,7,7];

let k = removeDuplicates(nums);
let output = nums.slice(0,k);
console.log(k);
console.log(nums);
console.log(output);
function removeDuplicates(arr) {
    let j = 1;
    for(let i = 0; i<arr.length-1; i++)
    {
        if(arr[i] !== arr[i+1])
        {
            arr[j] = arr[i+1];
            j++;
        }
    }
    
    return j;
};