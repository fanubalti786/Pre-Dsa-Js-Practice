
(12>10)? console.log("its true") : console.log("its false");

console.log((true)? "true": "false");

let a = 10;
let b = 12;

console.log((false)? `the value of a: ${a+1}` : `the value of b: ${b+1}`);

// Nested ternary operator
let num = 0;
console.log(num>0? "positive" : num<0? "negative" : "zero");
num = 60;
console.log(num>=18? num<=60? "you can vote": "you are retaired" : num<=0? "Invalid Number": "you can't vote");