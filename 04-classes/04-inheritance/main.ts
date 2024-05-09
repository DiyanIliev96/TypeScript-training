import { Animal } from "./animal";
import { Dog } from "./dog";
import { SuperDog } from "./super-dog";


let dog: Dog = new Dog('pesho',15)

let superDog: SuperDog = new SuperDog('Gosho',15,'SUPER BAW');

const animalsArray: Animal[] = [];
animalsArray.push(dog);
animalsArray.push(superDog);
console.log(dog.animalInfo());
console.log(dog.makeSound());
console.log(superDog.makeSound());
console.log(animalsArray.length);


