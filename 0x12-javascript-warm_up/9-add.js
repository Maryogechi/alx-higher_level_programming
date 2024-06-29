#!/usr/bin/node

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Get command-line arguments, excluding the first two default ones
const args = process.argv.slice(2);

// Check if the correct number of arguments is provided
if (args.length !== 2) {
  console.log("Missing or invalid integers");
} else {
  // Convert the arguments to integers
  const firstInt = parseInt(args[0], 10);
  const secondInt = parseInt(args[1], 10);

  // Check if both arguments can be converted to integers
  if (isNaN(firstInt) || isNaN(secondInt)) {
      console.log("Missing or invalid integers");
  } else {
      // Call the add function and print the result
      console.log(`The result of addition is: ${ad
  }
}
