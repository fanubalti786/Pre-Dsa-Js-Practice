


// // we can print first the var variable 
// console.log(a); 
// var a;


// // we can't print first the let variable
// console.log(b);
// let a;








// // 🔍 VAR vs LET — Theoretical Notes with Examples

// // ✅ 1. Scope:
// // -------------------------

// function scopeTest() {
//   if (true) {
//     var a = 100;  // var is function-scoped
//     let b = 200;  // let is block-scoped
//   }

//   console.log("var a:", a); // ✅ 100 — function scope me available
// //   console.log("let b:", b); // ❌ ReferenceError — block ke bahar access nahi
// }

// scopeTest();








// // ✅ 2. Hoisting:
// // -------------------------

// console.log(x); // ✅ undefined (var is hoisted with value 'undefined')
// // console.log(y); // ❌ ReferenceError (let is hoisted but not accessible)

// var x = 5;
// let y = 10;








// // ✅ 3. Redeclaration:
// // -------------------------

// var z = 1;
// var z = 2; // ✅ Allowed (no error)
// console.log("var z:", z); // 2

// let m = 10;
// // let m = 20; // ❌ SyntaxError: Identifier 'm' has already been declared
// console.log("let m:", m);









// // ✅ 4. Best Practice:
// // -------------------------

// // Old way (❌ risky)
// function usingVar() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log("var loop:", i), 100);
//   }
// }
// usingVar(); // Output: 3, 3, 3 ❌ (because var is function-scoped)

// // Modern way (✅ safe)
// function usingLet() {
//   for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log("let loop:", j), 100);
//   }
// }
// usingLet(); // Output: 0, 1, 2 ✅ (because let is block-scoped)


// ✅ Conclusion:
// -------------------------
// 🔸 Always use `let` in modern JavaScript
// 🔸 `var` should be avoided to prevent bugs
// 🔸 let gives better control, scoping, and readability
