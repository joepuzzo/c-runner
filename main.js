const ffi = require('ffi-napi');
const ref = require('ref-napi');

// define the 'int' type
const int = ref.types.int;

// define the argument types and return type for the 'add' function
const add = ffi.Library('./add.dylib', {
  add: [int, [int, int]]
});

// call the 'add' function
let result = add.add(5, 7);

console.log(`The result is: ${result}`);
