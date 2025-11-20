// Your task is to define a new method in our ComplexNumber class that subtracts another complex number from the current instance,
// then use this method and print the result to the console. Remember, a complex number consists of a real and an imaginary part.

class ComplexNumber {
  constructor(public real: number, public imaginary: number) {} // Type annotations for properties

  // Method to add another ComplexNumber object
  add(otherComplex: ComplexNumber): void {
    this.real += otherComplex.real;
    this.imaginary += otherComplex.imaginary;
  }

  subtract(otherComplex: ComplexNumber): void {
    this.real -= otherComplex.real;
    this.imaginary -= otherComplex.imaginary;
  }
}
// TODO: Define a method to subtract another ComplexNumber
// Formula: (a + bi) - (c + di) = (a - c) + (b - d)i}

// Create two instances of ComplexNumber
const firstComplex = new ComplexNumber(5, 3);
const secondComplex = new ComplexNumber(2, 4);

// Adding the second complex number to the first one
firstComplex.add(secondComplex);

// TODO: Subtract the second complex number from the first one
firstComplex.subtract(secondComplex);

// TODO: Output the result
console.log(firstComplex.real, firstComplex.imaginary);
