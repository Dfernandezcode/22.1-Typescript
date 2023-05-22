"use strict";
// Declare interface first.
Object.defineProperty(exports, "__esModule", { value: true });
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
var Animal = /** @class */ (function () {
    function Animal(species, legs, habitat) {
        this.species = species;
        this.legs = legs;
        this.habitat = habitat;
        console.log("Animal created!");
    }
    Animal.prototype.getDescription = function () {
        console.log("\n        I am a ".concat(this.species, ",\n        I have ").concat(this.legs, " legs\n        I live in ").concat(this.habitat));
    };
    return Animal;
}());
var dog = new Animal("dog", 4, "My home");
var fish = new Animal("fish", 0, "The Aquarium");
dog.getDescription();
fish.getDescription();
