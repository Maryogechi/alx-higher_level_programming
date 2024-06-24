#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}

// Test cases with specified output

const r1 = new Rectangle(2, 3);
console.log(r1); // Output: Rectangle { width: 2, height: 3 }
console.log(r1.width); // Output: 2
console.log(r1.height); // Output: 3

const r2 = new Rectangle(2, -3);
console.log(r2); // Output: Rectangle { width: 2, height: -3 }
console.log(r2.width); // Output: 2
console.log(r2.height); // Output: -3

const r3 = new Rectangle(2);
console.log(r3); // Output: Rectangle { width: 2, height: undefined }
console.log(r3.width); // Output: 2
console.log(r3.height); // Output: undefined
