import { Driver } from "./driver";


const driver = new Driver('Diyan','Iliev');

console.log(driver.getFirstName);
console.log(driver.getLastName);

driver.setFirstName = 'Patkan';
console.log(driver.getFirstName);
