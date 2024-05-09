"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = require("./dog");
const dog = new dog_1.Dog('Goshko', 4, 'BAW BAW');
console.log();
console.log(dog.makeSound(dog.getSound));
console.log(dog.animalInfo());
