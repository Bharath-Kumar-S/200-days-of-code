// TODO: Define a class named ElectronicDevice with a method to simulate turning the device on. Use 'console.log' statements for simulation.

class ElectronicDevice {
  public on: boolean;

  constructor() {
    this.on = false;
  }

  turnOn() {
    this.on = true;
    console.log("System ON!!!");
  }
}

// TODO: Define a class named Computer, which inherits from ElectronicDevice, and override the method to simulate booting up by not only turning on but also loading the operating system. Use 'console.log' statements to simulate the process of loading the operating system.

class Computer extends ElectronicDevice {
  constructor() {
    super();
  }

  turnOn() {
    super.turnOn();
  }

  boot() {
    this.turnOn();
    console.log("Computer Booting the OS!!!");
  }
}

// TODO: Create an instance of a Computer and call its method to turn on and demonstrate loading the operating system.

const c = new Computer();
c.boot();
