#!/usr/bin/node

const args = process.argv.slice(2); // Get command-line arguments, excluding the first two default ones

// Function to add two numbers
function add (a, b) {
  return a + b;
}

// Convert the arguments to integers
const firstInt = parseInt(args[0], 10);
const secondInt = parseInt(args[1], 10);

// Check if both arguments can be converted to integers
if (isNaN(firstInt) || isNaN(secondInt)) {
  console.log('Missing or invalid integers');
} else {
  // Call the add function and print the result
  console.log(`The result of addition is: ${add(firstInt, secondInt)}`);
}
