// first method of swaping with extra one variable
let a = 10;
let b = 20;
let c;

c = b;
b = a;
a = c;

console.log("value of a : ", a , " \nvalue of b : ", b);


// second method of swaping with using math concept

let d = 10;
let e = 20;

d = d + e; // 30
e = d - e; // 10
d = d - e; // 20

console.log(d);
console.log(e);


// third method for swaping with destructuring

var f = 10;
var g = 20;

var [g,f] = [f,g];

console.log(f);
console.log(g);


