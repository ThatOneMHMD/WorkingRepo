// I stupidly worked on this solved one...
const a = process.argv[2];
const b = process.argv[3];

// Using a conditional statement
if (a === b) {
  console.log(true);
} else {
  console.log(false);
}

// Using a ternary operator
console.log(a === b ? true : false)

// Comparing variables
console.log(a === b);

// Comparing argument values directly
console.log(process.argv[2] === process.argv[3]);

console.log(`I want a ${a} right this instant! But a ${b} would also be alright! Idiot!`)

// Example of what to write in terminal (corresponding to this file): node .\index.js drink water

