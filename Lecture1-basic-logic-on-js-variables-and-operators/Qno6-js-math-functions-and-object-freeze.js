// ✅ Math.round(): Round to nearest integer
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10

// ✅ Math.ceil(): Always round UP
console.log(Math.ceil(10.1)); // 11
console.log(Math.ceil(10.4)); // 11
console.log(Math.ceil(10.5)); // 11
console.log(Math.ceil(10.8)); // 11

// ✅ Math.floor(): Always round DOWN
console.log(Math.floor(10.1)); // 10
console.log(Math.floor(10.4)); // 10
console.log(Math.floor(10.5)); // 10
console.log(Math.floor(10.9)); // 10

// ✅ Math.trunc(): Remove decimal, keep only integer part
console.log(Math.trunc(10.10)); // 10
console.log(Math.trunc(10.99)); // 10

// ✅ Math.pow(): Power — base ^ exponent
console.log(Math.pow(2, 5)); // 2^5 = 32

// ✅ Math.sqrt(): Square root
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(10)); // 3.1622...

// ✅ Math.cbrt(): Cube root
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(29)); // 3.0723...

// ✅ Math.abs(): Absolute value (always positive)
console.log(Math.abs(-8)); // 8
console.log(Math.abs(9));  // 9

// ✅ Math.max(): Largest value
console.log(Math.max(27, 29, 5, 8)); // 29

// ✅ Math.min(): Smallest value
console.log(Math.min(27, 29, 5, 8)); // 5

// ✅ Math.random(): Random value between 0 and 1
console.log(Math.random()); // e.g., 0.3498

// ✅ Scale random value between 0 and 8999
console.log(Math.random() * 9000); // e.g., 0 to 8999.999...

// ✅ Shift range: 1000 to 9999
console.log((Math.random() * 9000) + 1000); // e.g., 1000 to 9999.999...

// ✅ toFixed(): Round and format to specific decimal places
let a = 99.383;
console.log(a.toFixed(2)); // "99.38" (as string)


// ✅ Object.freeze(): Make object immutable (can't update/add/delete properties)

// ❌ Freezing a primitive (like number) does nothing
let c = 10;
Object.freeze(c); // no effect
c = 20; // allowed
console.log(c); // 20

// ✅ Freezing an object
let b = {
    name: "irfan",
    roll: "sp-21432"
};

Object.freeze(b);

// ❌ Can't add new property
b.class = "7th";

// ❌ Can't update existing property
b.name = "ali";

// ❌ Can't delete existing property
delete b.roll;

console.log(b);
// Output: { name: "irfan", roll: "sp-21432" }
