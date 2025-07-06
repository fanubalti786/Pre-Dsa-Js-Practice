let prompt = require("prompt-sync")();
let n = +(prompt("enter number for your mirorr right angle triangle pattern: "));
for(let i=1; i<=n; i++)
{
    for(let j=1; j<=n-i; j++)
    {
        process.stdout.write("");
    }
    for(let k=1; k<=i; k++)
    {
        process.stdout.write("* ")
    }
    console.log("");
}