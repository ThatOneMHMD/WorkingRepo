// TODO: Refactor the class to a factory function.
class Lesson {
  constructor() {
    this.title = "Module 17 - Computer Science";
    this.description = "CS for JS";
  }
  information() {
    console.log(this.title, this.description);
  }
}

const csForJS = new Lesson();
csForJS.information();


// MY PART HERE!!!!!/////////////////////////////////////////////////////////////////////////////////////

function song(name, singer) {
  // Create an user object and map the function arguments to a key in the object.
  const user = {
    name,
    singer,
  };

  // Return two inner functions.
  return {
    information: function () {
      // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
      return console.log(
        `Hi my name is ${name} and I am the singer of the fantastic song: ${singer}!`
      );
    },
  };
}

const singerOne = song("Ali", "A Red Lily And A Red Sunset");
singerOne.information();
