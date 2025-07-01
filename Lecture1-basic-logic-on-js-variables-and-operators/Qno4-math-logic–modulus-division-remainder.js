// ✅ JavaScript Notes: Modulus (%), Division (/), Math.floor() – Full Concept

/*
📌 What is % ?
- % is the modulus operator.
- It returns the remainder after division.
- Syntax: A % B → Remainder after dividing A by B.
*/

/*
📌 What is / ?
- / is the division operator.
- It returns the decimal result of dividing A by B.

📌 What is Math.floor() ?
- Math.floor(x) returns the largest integer ≤ x (rounds down).
- Used to get whole number part (quotient) of division.
*/

let A = 23;
let B = 6;

console.log("Quotient using /       :", A / B);             // ➤ 3.833...
console.log("Whole Quotient (floor) :", Math.floor(A / B)); // ➤ 3
console.log("Remainder using %      :", A % B);             // ➤ 5

// ✅ Formula: A = B × quotient + remainder
// So: 23 = 6 × 3 + 5

/*
--------------------------------------
🔹 Special Trick: Getting Last Digits
--------------------------------------
*/

console.log(69 % 10);     // ➤ 9 → Last digit of 69
console.log(123 % 10);    // ➤ 3 → Last digit
console.log(250 % 100);   // ➤ 50 → Last 2 digits
console.log(9876 % 100);  // ➤ 76 → Last 2 digits
console.log(12345 % 1000); // ➤ 345 → Last 3 digits

// 🔸 Pattern:
/// A % 10    → Last 1 digit
/// A % 100   → Last 2 digits
/// A % 1000  → Last 3 digits

/*
-----------------------------
🔹 Division + Pagination Example
-----------------------------
*/

let itemIndex = 250;
let itemsPerPage = 100;

let page = Math.floor(itemIndex / itemsPerPage) + 1;
console.log("Page number:", page); // ➤ 3 (Items 200–299)

// ✅ Why +1?
// Because itemIndex starts from 0 (zero-based index)

/*
---------------------------------------
🔹 Quotient & Remainder – Table Format
---------------------------------------
*/

function printDivisionDetails(a, b) {
  console.log(`\n🔹 ${a} ÷ ${b}`);
  console.log("  Decimal Quotient     :", a / b);
  console.log("  Whole Quotient       :", Math.floor(a / b));
  console.log("  Remainder (a % b)     :", a % b);
}

printDivisionDetails(23, 6);
printDivisionDetails(69, 10);
printDivisionDetails(250, 100);
printDivisionDetails(10, 3);
printDivisionDetails(5, 5);
printDivisionDetails(2, 7);

/*
-----------------------------
🔹 Real-World Use Cases
-----------------------------
*/

// 🔸 Even or Odd
let num = 27;
console.log(num % 2 === 0 ? "Even" : "Odd"); // ➤ Odd

// 🔸 Check if number is multiple of 3
if (num % 3 === 0) {
  console.log("Multiple of 3");
}

// 🔸 Every 5th item logic
for (let i = 1; i <= 20; i++) {
  if (i % 5 === 0) {
    console.log(i + " is a multiple of 5");
  }
}

// 🔸 Check if year ends in '24'
let year = 2024;
if (year % 100 === 24) {
  console.log("Year ends with 24");
}

// 🔸 Get last digit(s)
console.log("Last digit:", year % 10);     // ➤ 4
console.log("Last 2 digits:", year % 100); // ➤ 24

/*
---------------------
🧠 Summary to Remember
---------------------

✅ a % b      → remainder
✅ a / b      → decimal division
✅ Math.floor(a / b) → whole number quotient

🟢 Rule: a = (b × quotient) + remainder

🟢 Use-Cases:
✔ Even/odd check (% 2)
✔ Multiples (e.g. % 3, % 5)
✔ Pagination (floor division + 1)
✔ Last digit(s) (% 10, 100, 1000)
✔ Item grouping in loops

🔹 Example:
23 ÷ 6
→ quotient = 3
→ remainder = 5
→ 23 = 6×3 + 5 ✅
*/
