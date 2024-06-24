#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}
// Creating an instance of Rectangle with width 5 and height 10
const rect = new Rectangle(2, 3);

// Accessing instance attributes
console.log(rect.width); // Output: 2
console.log(rect.height); // Output: 3
