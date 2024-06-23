#!/usr/bin/node
const args = process.argv.slice(2); // Get command-line arguments, excluding the first two default ones

const size = parseInt(args[0], 10); // Convert the first argument to an integer

if (isNaN(size)) {
    console.log("Missing size");
} else {
    const line = "X".repeat(size); // Create a single line of 'X' characters
    for (let i = 0; i < size; i++) {
        console.log(line);
    }
}