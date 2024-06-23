#!/usr/bin/node

// a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer

const args = process.argv.slice(2); // Get command-line arguments, excluding the first two default ones

// Function to check if a string can be converted to an integer
const isInteger = (str) => {
  const num = Number(str);
  return Number.isInteger(num);
};

// Check if the first argument is passed and if it can be converted to an integer
if (args[0] !== undefined && isInteger(args[0])) {
  console.log(`My number: ${parseInt(args[0], 10)}`);
} else {
  console.log('Not a number');
}
