#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}

// Test cases with specified output
const rect1 = new Rectangle(2, 3);
console.log(rect1); // Output: Rectangle { width: 2, height: 3 }
console.log(rect1.width); // Output: 2
console.log(rect1.height); // Output: 3

const rect2 = new Rectangle(2, -3);
console.log(rect2); // Output: Rectangle { width: 2, height: -3 }
console.log(rect2.width); // Output: 2
console.log(rect2.height); // Output: -3

const rect3 = new Rectangle(2);
console.log(rect3); // Output: Rectangle { width: 2, height: undefined }
console.log(rect3.width); // Output: 2
console.log(rect3.height); // Output: undefined
