import { Animal } from "./animal";

export class Dog extends Animal {
    constructor(firstName: string,age: number) {
        super(firstName,age);
    }

    makeSound(): string {
        return "Baw baw";
    }
}