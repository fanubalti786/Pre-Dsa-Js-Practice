// total profit according to each day buying and selling
let prices = [7,1,5,3,6,4];
let profit = 0;
for(let i = 1; i<prices.length; i++)
{
    if(prices[i] > prices[i-1])
    {
        profit += prices[i] - prices[i-1];
    }
}

console.log(profit);