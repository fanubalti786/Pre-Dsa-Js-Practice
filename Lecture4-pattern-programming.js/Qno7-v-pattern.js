let prompt = require("prompt-sync")();
let n = +prompt("enter number for your X pattern: ");
for (let i = 1; i <= n-5; i++) {
  for (let j = 1; j <= n; j++) {
    // process.stdout.write("*")
    if (i === j || i + j === n) {
      process.stdout.write("*");
    }
    else{
        process.stdout.write(" ")
    }
  }
  console.log("");
}



// we can make big V pattern according to this condition
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n*2; j++) {
//     // process.stdout.write("*")
//     if (i === j || i + j === n*2) {
//       process.stdout.write("*");
//     }
//     else{
//         process.stdout.write(" ")
//     }
//   }
//   console.log("");
// }
