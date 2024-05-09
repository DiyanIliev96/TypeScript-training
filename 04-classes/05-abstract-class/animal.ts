export abstract class Animal {
    constructor(private name: string, private age: number) {
        
    }

    makeSound(sound: string): string {
        return `${sound}`
    }

    animalInfo(): string {
        return `This animal name is ${this.name} and his age is ${this.age}`
    }
}