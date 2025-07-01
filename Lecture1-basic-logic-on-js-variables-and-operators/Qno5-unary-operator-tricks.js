// ✅ JavaScript Notes: ++ and -- Operators (Prefix vs Postfix)

/*
📌 ++x (Prefix): Increments first, then returns the new value
📌 x++ (Postfix): Returns the value first, then increments later
*/

// ----------------------
// 🔹 Simple Examples
// ----------------------

let x = 5;
console.log(++x); // ➤ 6 → increment first, then use
console.log(x);   // ➤ 6

let y = 5;
console.log(y++); // ➤ 5 → use first, then increment
console.log(y);   // ➤ 6

// ----------------------
// 🔹 Confusing Expression
// ----------------------

let i = 11;

i = i++ + ++i;
// Step-by-step:
// i++ → use 11, then i = 12
// ++i → i becomes 13
// i = 11 + 13 = 24 ✅

console.log("i =", i); // ➤ 24

// ----------------------
// 🔹 Multiple Increments in One Expression
// ----------------------

let a = 11, b = 22;

// Breakdown:
// a + b      → 11 + 22 = 33
// a++ + b++  → 11 + 22 = 33, then a=12, b=23
// ++a + ++b  → 13 + 24 = 37
// Total: 33 + 33 + 37 = 103

let c = a + b + a++ + b++ + ++a + ++b;

console.log("a =", a); // ➤ 13
console.log("b =", b); // ➤ 24
console.log("c =", c); // ➤ 103

// ----------------------
// 🔹 Boolean Increment
// ----------------------

let e = true; // true = 1 (numeric)

++e; // 1 becomes 2

console.log("e =", e); // ➤ 2 ✅

// 🔹 Works because JS converts true → 1

// ----------------------
// 🔴 Invalid: Unary ++ on constant
// ----------------------

/*
let f = ++11; ❌
Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
→ Reason: 11 is a constant literal — can't be incremented
*/

// ----------------------
// 🔴 Invalid: ++ on g++
// ----------------------

/*
let g = 10;
let h = ++(g++); ❌
Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
→ Reason: (g++) is not a variable (it's a temporary value)
→ ++ needs a valid left-hand value (l-value)
*/

// ✅ Correct way:
let g = 10;
g++;
let h = ++g;
console.log("g =", g); // ➤ 12
console.log("h =", h); // ➤ 12

/*
------------------------------------------------------
🔹 Summary: Prefix (++x) vs Postfix (x++)
------------------------------------------------------

x = 5;

let a = ++x;
// x becomes 6, a = 6

x = 5;
let b = x++;
// b = 5, x becomes 6

✅ Prefix (++x):
- Increments first
- Then returns new value

✅ Postfix (x++):
- Returns original value
- Then increments after

------------------------------------------------------
🧠 Important Rules:
------------------------------------------------------

1. ✅ ++/-- can only be applied to variables (not constants or expressions)
   ❌ ++11  → Error
   ❌ ++(x + 1) → Error

2. ✅ ++true works because `true` is converted to 1

3. ✅ a++ + ++a → works but is confusing; break it into parts!

4. 🔥 Always debug complex expressions with step-by-step dry run.

------------------------------------------------------
✅ Good Practice Tip:
------------------------------------------------------

Avoid expressions like:
   total = a++ + ++a + b++ + ++b;

Instead, write in steps:
   let x = a++;
   let y = ++a;
   total = x + y;

This improves readability and reduces bugs.
*/