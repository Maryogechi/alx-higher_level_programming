#!/usr/bin/node

// a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer

function isInteger (str) {
  return parseInt(str) === Number(str);
}
console.log(isInteger('first argument converted in integer'));
console.log(isInteger('Not a number'));
