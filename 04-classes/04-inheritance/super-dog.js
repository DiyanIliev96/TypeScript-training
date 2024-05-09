"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperDog = void 0;
const dog_1 = require("./dog");
class SuperDog extends dog_1.Dog {
    constructor(firstName, age, power) {
        super(firstName, age);
        this.power = power;
    }
    makeSound() {
        return super.makeSound() + ` ${this.power}`;
    }
}
exports.SuperDog = SuperDog;
