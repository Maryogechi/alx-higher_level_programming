#!/usr/bin/node
class Rectangle {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate area
  calculateArea () {
    return this.width * this.height;
  }
}
const myRectangle = new Rectangle(5, 3);
console.log(myRectangle.calculateArea());
