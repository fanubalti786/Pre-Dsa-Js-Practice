// first approach
let nums = [-2,1.-3,4,-1,2,1,-5,4];
// nums = [1, -2, 3, 4, -1];
let max = -Infinity;
let sum = 0;

for(let i=0; i<nums.length; i++)
{
    sum += nums[i];
    max = Math.max(max,sum);
    if(sum<0)
    {
        sum = 0;
    }
}

console.log(max);



// second approach
function maxSubArray(nums1) {
    let maxSoFar = nums1[0];       // sabse bada sum
    let currentSum = nums1[0];     // ab tak ka current sum

    for (let i = 1; i < nums1.length; i++) {
        // ya to current element lo, ya pichlay sum ke sath jodo
        currentSum = Math.max(nums1[i], currentSum + nums1[i]);

        // max ko update karo agar current sum bada hai
        maxSoFar = Math.max(maxSoFar, currentSum);
    }

    return maxSoFar;
}

// Example
let nums1 = [1, -2, 3, 4, -1];
console.log("Max Sum:", maxSubArray(nums1));  // Output: 7