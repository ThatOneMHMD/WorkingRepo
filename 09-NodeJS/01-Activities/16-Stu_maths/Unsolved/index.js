// TODO: Import `maths.js`
const mathsImported = require("./maths")

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];

const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

// first time but easy:
switch (operation) {
  case 'sum':
    console.log(mathsImported.sum(numOne, numTwo));
    break; //just have to break after each one
  case 'difference':
    console.log(mathsImported.difference(numOne, numTwo));
    break;
  case 'product':
    console.log(mathsImported.product(numOne, numTwo));
    break;
  case 'quotient':
    console.log(mathsImported.quotient(numOne, numTwo));
    break;
  default:
    console.log('Check your maths!');
}

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
