let prompt = require("prompt-sync")();
let rows = +prompt("Enter rows of stars: ");
let colums = +prompt("Enter colums of stars: ");


for(let i=1; i<=rows; i++){

    for(let j=1; j<=colums; j++){
        process.stdout.write("*");
    }
    console.log();
}