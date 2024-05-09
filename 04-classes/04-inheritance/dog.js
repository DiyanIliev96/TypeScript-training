"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const animal_1 = require("./animal");
class Dog extends animal_1.Animal {
    constructor(firstName, age) {
        super(firstName, age);
    }
    makeSound() {
        return "Baw baw";
    }
}
exports.Dog = Dog;
