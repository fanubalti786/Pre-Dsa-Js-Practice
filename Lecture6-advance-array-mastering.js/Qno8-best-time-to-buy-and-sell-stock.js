let stockPrice = [7,1,5,3,6,4];
let profit = 0;
let min = stockPrice[0];

for(let i = 0; i<stockPrice.length; i++)
{
    if(stockPrice[i] < min)
    {
        min = stockPrice[i];
    }else if(stockPrice[i] > min) {
        let put = stockPrice[i] - min ;
        if(put > profit)
        {
            profit = stockPrice[i];
        }
    }
}

console.log(profit);