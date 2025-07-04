// 🔁 Basic for loop: Prints numbers from 0 to 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("\n"); // Just to separate output visually

// 🔁 Using var allows access to 'i' even after the loop ends
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // Outputs 10, because 'var' is function/global scoped

// 🔁 If you want to use 'let' and access the loop counter after the loop,
// you must declare 'let' outside the loop.
let j = 0;
for (; j < 10; j++) {
    console.log(j);
}

console.log(j); // Outputs 10, as 'j' is declared in outer scope

// ⚠️ Infinite loops — Valid but dangerous if not exited manually

// Example 1: No increment in loop condition — infinite loop
// for (let k = 0; k <= 10;) {
//     console.log("Value of k: " + k);
// }

// Example 2: Only initialization — infinite loop
// for (let k = 0;;) {
//     console.log("Value of k: " + k);
// }

// Example 3: Classic infinite loop — no init, no condition, no increment
// for (;;) {
//     console.log("This will run forever unless manually stopped");
// }

// ❌ Invalid loop — missing one semicolon (JavaScript requires two)
// for (;) {
//     console.log("Invalid syntax — this won't compile");
// }
