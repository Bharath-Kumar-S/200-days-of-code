// // Define the Rectangle class with two attributes, length and width
// class Rectangle {
//     constructor(public length: number, public width: number) {
//         this.length = length;  // attribute representing the length of the rectangle
//         this.width = width;    // attribute representing the width of the rectangle
//     }

//     // Method to calculate the area of the rectangle
//     calculateArea(length: number, width: number): number {
//         return length * width;
//     }
// }

// // Create an instance of Rectangle with length 5 and width 10
// let myRectangle = new Rectangle(5, 10);

// // Output the area of myRectangle
// console.log(`The area of the rectangle is: ${myRectangle.calculateArea()} square units`);

// Define the Rectangle class with two attributes, length and width
class Rectangle {
  constructor(public length: number, public width: number) {
    this.length = length; // attribute representing the length of the rectangle
    this.width = width; // attribute representing the width of the rectangle
  }

  // Method to calculate the area of the rectangle
  calculateArea(): number {
    return this.length * this.width;
  }
}

// Create an instance of Rectangle with length 5 and width 10
let myRectangle = new Rectangle(5, 10);

// Output the area of myRectangle
console.log(
  `The area of the rectangle is: ${myRectangle.calculateArea()} square units`
);
