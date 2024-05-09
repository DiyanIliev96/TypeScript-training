"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = require("./dog");
const super_dog_1 = require("./super-dog");
let dog = new dog_1.Dog('pesho', 15);
let superDog = new super_dog_1.SuperDog('Gosho', 15, 'SUPER BAW');
console.log(dog.animalInfo());
console.log(dog.makeSound());
console.log(superDog.makeSound());
