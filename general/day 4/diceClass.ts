// Your task is to strengthen your understanding of TypeScript classes by creating a Dice class.
// This class will represent a six-sided die by default but should be flexible enough to accommodate any number of sides.
// The class must include a method to simulate rolling the dice, returning a random result based on the number of sides.
// Utilize Math.random() to achieve this, generating a random number between 0 (inclusive) and 1 (exclusive), which you then scale appropriately.
// Roll the dice and output the result to solidify your grasp of object-oriented programming in TypeScript.

// Remember – similar to functions in TypeScript, methods within a class can return values or simply end without returning anything.

// TODO: Define the Dice class
class Dice {
  // TODO: Implement the constructor to set the number of sides
  constructor(public sides: number) {
    this.sides = sides;
  }

  // TODO: Implement the roll method to return a random number from 1 to the number of sides
  roll(): number {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}

// TODO: Create an instance of the Dice class with default sides
const test = new Dice(6);

// TODO: Roll the dice and print the result with a descriptive message
console.log(test.roll());
