"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound(sound) {
        return `${sound}`;
    }
    animalInfo() {
        return `This animal name is ${this.name} and his age is ${this.age}`;
    }
}
exports.Animal = Animal;
