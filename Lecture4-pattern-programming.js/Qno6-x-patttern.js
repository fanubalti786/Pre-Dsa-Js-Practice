let prompt = require("prompt-sync")();
let n = +prompt("enter number for your X pattern: ");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === n + 1) {
      process.stdout.write("* ");
    }
    else{
        process.stdout.write("  ")
    }
  }
  console.log("");
}
