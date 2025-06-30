

// JavaScript - Type Coercion Examples

// 1. String + Number → result is string
var a = 5;
var b = "2";
console.log(a + b); // "52" → 5 becomes "5", then "5" + "2" = "52"

// 2. String - Number → result is number
console.log("5" - 2); // 3 → "5" becomes number
console.log("10" * 2); // 20 → "10" coerced to number

// 3. Invalid String - Number → NaN
console.log("abc" - 1); // NaN → "abc" can't convert to number

// 4. Boolean + Number
console.log(true + 1);  // 2 → true = 1
console.log(false + 1); // 1 → false = 0

// 5. Equality (==) vs Strict Equality (===)
console.log(0 == false);  // true → loose equality with coercion
console.log(0 === false); // false → strict equality (type mismatch)
console.log("5" == 5);    // true → "5" converted to number
console.log("5" === 5);   // false → types are different

// 6. Null and Undefined
console.log(null == undefined);  // true → both considered empty
console.log(null === undefined); // false → different types

// 7. Mixed operations
console.log(1 + 2 + "3"); // "33" → (1+2=3) + "3" → "33"
console.log("3" + 1 + 2); // "312" → "3" + "1" = "31", then + 2 = "312"

// 8. Unary + operator → converts to number
console.log(+"5");     // 5 → string to number
console.log(+true);    // 1
console.log(+false);   // 0
console.log(+"abc");   // NaN

// 9. console.log with comma
var x = 10;
var y = 12;
console.log("Sum with +: " + (x + y)); // "Sum with +: 22"
console.log("Sum with ,:", x + y);     // "Sum with ,:" 22 (comma separates args, not coerces)
