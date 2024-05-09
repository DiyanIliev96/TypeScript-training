import { Animal } from "./animal";

export class Dog extends Animal {
    constructor(name: string,age: number, private sound: string) {
        super(name,age)
    }

    get getSound(): string {
        return this.sound;
    }
}