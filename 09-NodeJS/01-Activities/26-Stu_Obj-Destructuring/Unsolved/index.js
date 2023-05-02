// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'

console.log(nodejs.name); // <= Node.js
// or
// const {name, type} = nodejs;
// console.log(name,type);

console.log(nodejs.type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// TODO: Destructure the nested object 'js'

console.log(js.tools.frameworks.framework1); // <= AngularJS

// or
const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js


// console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: Destructure the array 'languages'

const [a, b, c] = languages

console.log(languages); // <= HTML CSS JavaScript
console.log(languages[0]); // <= HTML
// or
console.log(a);
