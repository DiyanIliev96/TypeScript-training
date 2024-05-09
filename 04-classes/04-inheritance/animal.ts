export class Animal {

    constructor(private name: string,private age: number) {

    }

    animalInfo(): string{
        return `This animal name is ${this.name} and his age is ${this.age}`
    }
}