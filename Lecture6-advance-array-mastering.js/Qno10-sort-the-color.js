let colors = [2,0,2,1,1,0];
let j = 0, temp = 0, k = colors.length - 1;

for(let i = 0; i<=k; i++)
{
    if(colors[i] === 0)
    {
        temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;
        j++;
    }
    else if(colors[i] === 2)
    {
        temp = colors[i];
        colors[i] = colors[k];
        colors[k] = temp;
        i--;
        k--;
    }
    
}
console.log("first approach ", colors);



// its a batter approach
let nums = [2,0,2,1,1,0];
let sortColors = function(nums) {
    let i = 0, j = 0, temp = 0, k = nums.length - 1;
    while(i<=k)
    {
        if( nums[i] === 0 )
        {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            i++;
            j++;
        }

        else if( nums[i] === 2)
        {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            k--;
        }
        else{
            i++;
        }
        
    }
    return nums;
};

console.log("second approach ", sortColors(nums))