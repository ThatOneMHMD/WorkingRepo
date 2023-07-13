// TODO: Complete the 'counter' function below.
function counter() {
  let count = 0;

  return {
    increment: function () {
      count += 1;
      return count;
    },
  };
}

const myCounter = counter();

console.log(myCounter.increment()); // Output: 1
console.log(myCounter.increment()); // Output: 2
console.log(myCounter.increment()); // Output: 3
console.log(myCounter.increment()); // Output: 4
console.log(myCounter.increment()); // Output: 5
console.log(myCounter.increment()); // Output: 6


module.exports = counter;
