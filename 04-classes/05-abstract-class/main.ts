import { Dog } from "./dog";

const dog: Dog = new Dog('Goshko',4,'BAW BAW');

console.log();

console.log(dog.makeSound(dog.getSound));
console.log(dog.animalInfo());

