const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
  // if the el we are handling is the last el of the array, then get the average by dividing by the array length (total of numbers/grades) and return the average
  if (index === array.length - 1) {
    return (accumulator + currentValue) / array.length;
  }

  //Do this normally (if the 'if' statement is false)
  return accumulator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);

// ///////////

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

const sumWithInitial2 = grades.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
console.log(sumWithInitial2/grades.length);
console.log(56+ 78+ 99+ 85);