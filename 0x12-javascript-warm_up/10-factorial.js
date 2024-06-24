#!/usr/bin/node

// Function to compute factorial recursively
function factorial (n) {
  if (n === 0 || isNaN(n)) {
    return 1; // Factorial of 0 and NaN is 1
  }
  return n * factorial(n - 1);
}

// Get command-line arguments, excluding the first two default ones
const args = process.argv.slice(2);

// Convert the argument to an integer
const number = parseInt(args[0], 10);

// Call the factorial function and print the result
console.log(factorial(number));
