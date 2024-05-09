import { Dog } from "./dog";

export class SuperDog extends Dog {
    constructor(firstName: string,age: number,private power: string) {
        super(firstName,age);
    }

    makeSound(): string {
        return super.makeSound() + ` ${this.power}`
    }
    
}