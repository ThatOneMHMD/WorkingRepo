const arr = [0, 2, 3, 4, 5, 6, 7, 8, 9, 7, 10];

// Get value that its index has its own value, if exists
const linearSearch = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    // arr[i] gives value at index i
    if (arr[el] !== el) {
      return -1;
    } else {
      return arr[el];
    }
  }
};

console.log(linearSearch(arr, 10)); //10
console.log(linearSearch(arr, 0)); //0
console.log(linearSearch(arr, 11)); //-1

// //////////////
// Linear Search
function findPosition(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i; // Return the position if value is found
    }
  }
  return -1; // Return -1 if value is not found
}

// Test the function
console.log(findPosition(arr, 1)); // Output: 2



// Palindrom solution! (parallel words or whatver: like mom, dad, racecar, etc.)
const isPalindromeTwo = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindromeTwo("racecar")); //true
console.log(isPalindromeTwo("poop")); //true
console.log(isPalindromeTwo("mad")); //false



module.exports = { findPosition, linearSearch };
