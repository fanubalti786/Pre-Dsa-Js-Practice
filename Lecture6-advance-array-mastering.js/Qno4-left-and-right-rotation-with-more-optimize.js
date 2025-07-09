let prompt = require("prompt-sync")();
let arr = [1,2,3,4,5];
let k = +prompt("Enter the value of K: ");
k = k % arr.length;
reverse(0, k-1);
reverse(k, arr.length-1);
reverse(0, arr.length-1);
console.log(`with left side ${k} spacing ${arr}`);


arr = [1,2,3,4,5];
reverse(0, arr.length-1);
reverse(0, k-1);
reverse(k, arr.length-1);
console.log(`with right side ${k} spacing ${arr}`);
function reverse(i , j){
    while(i<j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}