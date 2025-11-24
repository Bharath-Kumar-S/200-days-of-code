class Animal {
  constructor(public name: string, public habitat: string) {}
}

class Bird extends Animal {
  public canFly: boolean;

  constructor(name: string, habitat: string, canFly: boolean) {
    // TODO: Ensure this class correctly inherits 'name' and 'habitat', and add 'canFly' attribute
    super(name, habitat);
    this.canFly = canFly;
  }
}

// Instantiate a Bird object
const parrot = new Bird("Parrot", "Tropical", true);

// Print the inherited and own attributes
console.log(
  `${parrot.name} lives in ${parrot.habitat} and can fly: ${parrot.canFly}`
);
