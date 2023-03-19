// WRITE YOUR CODE HERE

var names = ["Karl", "Andre", "Ali", "Omar", "Shady"];

var randomNumber = Math.floor(Math.random() * names.length);

console.log(`Hello to class, ${names[randomNumber]}`)

// ReadME requirements:

console.log(names.length)

console.log(names)

console.log(`Hello to class, ${names}`)

names[0] = "Muhammad";

console.log(names)

if (names[0] === "Muhammad") {

    console.log("Name has been replaced")
} else {

    console.log( "Name has NOT been replaced")
}

for (var i = 0; i <names.length; i++) {

    console.log("Welcome to class " + names[i] + ".")
}