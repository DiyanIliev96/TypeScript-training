"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const animal_1 = require("./animal");
class Dog extends animal_1.Animal {
    constructor(name, age, sound) {
        super(name, age);
        this.sound = sound;
    }
    get getSound() {
        return this.sound;
    }
}
exports.Dog = Dog;
