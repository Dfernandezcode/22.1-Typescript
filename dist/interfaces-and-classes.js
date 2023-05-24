// Declare interface first.
/*
const address: object = {
    street: "random street",
    number: "414",
    city: "Madrid"
}
*/
// apply specific values and utilize.
var myAddress = {
    street: "random street",
    number: 414,
    city: "Madrid",
};
// remmber to define the interface.
// order of variables doesn't matter!
var me = {
    name: "Dani",
    phone: 62414141,
    address: {
        street: "Imaginary street",
        city: "Madrid",
        number: 12
    }
};
// Classes
// create the interface.
var Animal = /** @class */ (function () {
    // build the constructure using the interface.
    function Animal(species, legs, habitat) {
        this.species = species;
        this.legs = legs;
        this.habitat = habitat;
        console.log("Animal created!");
    }
    // after declaring constructor variables - use in function to be called later on. 
    Animal.prototype.getDescription = function () {
        console.log("\n        I am a ".concat(this.species, ",\n        I have ").concat(this.legs, " legs\n        I live in ").concat(this.habitat));
    };
    return Animal;
}());
// assign values to variables.
var dog = new Animal("dog", 4, "the house");
var fish = new Animal("fish", 0, "the Aquarium");
// run function with relevant constant. const + function.
dog.getDescription();
fish.getDescription();
var Car = /** @class */ (function () {
    // 4 is default value.
    function Car(brand, model, wheels) {
        if (wheels === void 0) { wheels = 4; }
        this.model = model;
        this.brand = brand;
        this.wheels = wheels;
    }
    return Car;
}());
var coche = new Car("Lexus", "CT200");
var limusina = new Car("Mayback", "3000", 6);
console.log("El lexus tiene estas ruedas: " + coche.wheels);
console.log("La limo tiene estas ruedas: " + limusina.wheels);
