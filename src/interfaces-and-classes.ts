// Declare interface first.

interface Address {
    street: string;
    number: number;
    city: string;
}

/*
const address: object = {
    street: "random street",
    number: "414",
    city: "Madrid"
}
*/

// apply specific values and utilize.
const myAddress: Address = {
    street: "random street",
    number: 414,
    city: "Madrid",
}

// You can use another interface within another interface.
interface Individual {
    name: string;
    phone: number;
    address: {
        street: string;
        city: string;
        number: number;
    };
}


// remmber to define the interface.
// order of variables doesn't matter!

const me: Individual = {
    name: "Dani",
    phone: 62414141,
    address: {
        street: "Imaginary street",
        city: "Madrid",
        number: 12
    }
}

// Classes

// create the interface.
class Animal {
    species: string;
    legs: number;
    habitat: string;
    // build the constructure using the interface.
    constructor(species: string, legs: number, habitat: string) {
        this.species = species;
        this.legs = legs;
        this.habitat = habitat;

        console.log("Animal created!")
    }

    // after declaring constructor variables - use in function to be called later on. 
    getDescription() {
        console.log(`
        I am a ${this.species},
        I have ${this.legs} legs
        I live in ${this.habitat}`)
    }
}

// assign values to variables.
const dog = new Animal("dog", 4, "the house")

const fish = new Animal("fish", 0, "the Aquarium")

// run function with relevant constant. const + function.
dog.getDescription();
fish.getDescription();

// Clases que cumplen interfaces
interface Automobile {
    wheels: number;
    brand: string;
    model: string;
  }

class Car implements Automobile {
    public wheels: number;
    public brand: string;
    public model: string;
  
    // 4 is default value.
    constructor(brand: string, model: string, wheels: number = 4) {
      this.model = model;
      this.brand = brand;
      this.wheels = wheels;
    }
  }
  
  const coche = new Car("Lexus", "CT200");
  const limusina = new Car("Mayback", "3000", 6);
  console.log("El lexus tiene estas ruedas: " + coche.wheels);
  console.log("La limo tiene estas ruedas: " + limusina.wheels);