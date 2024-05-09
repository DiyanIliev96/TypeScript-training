import { Dog } from "./dog";
import { SuperDog } from "./super-dog";


let dog: Dog = new Dog('pesho',15)

let superDog: SuperDog = new SuperDog('Gosho',15,'SUPER BAW');
console.log(dog.animalInfo());
console.log(dog.makeSound());
console.log(superDog.makeSound());

