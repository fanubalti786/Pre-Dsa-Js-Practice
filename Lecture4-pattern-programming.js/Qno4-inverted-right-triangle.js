let prompt = require("prompt-sync")();



// inverted right triangle with stars 
let num1 = Number(prompt("Enter rows for stars : "));
for(let i=num1; i>=1; i--){

    for(let j=1; j<=i; j++){
        process.stdout.write("*");
    }
    console.log();
}




// inverted right triangle with number
let num2 = Number(prompt("Enter rows for random numbers: "));
for(let i=num2; i>=1; i--){

    for(let j=i; j>=1; j--){
        process.stdout.write(j.toString());
    }
    console.log();
}


// inverted right-triangle pattern with all assending number 
// right triangle with number
let num3 = Number(prompt("Enter rows for sequence right number triangle : "));
let count = 1;
for(let i=5; i>=1; i--){

    for(let j=i; j>=1; j--){
        if(count === 10)
        {
            count -= 9;
        }
        process.stdout.write(count.toString());
        count++;
    }
    console.log();
}



// right triangle with random capital letters 
let num4 = Number(prompt("Enter rows for Capital alphabet triangle : "));
for(let i=num4; i>=1; i--){
    let ascii = 65;
    for(let j=i; j>=1; j--){
        process.stdout.write(String.fromCharCode(ascii));
        ascii++;
    }
    console.log();
}



// right triangle with sequence capital letters 
let num5 = Number(prompt("Enter rows for sequence Capital alphabet triangle : "));
let ascii = 65;
for(let i=num5; i>=1; i--){

    for(let j=i; j>=1; j--){
        process.stdout.write(String.fromCharCode(ascii));
        ascii++;
    }
    console.log();
}