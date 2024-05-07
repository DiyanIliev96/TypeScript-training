"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var driver_1 = require("./driver");
var driver = new driver_1.Driver('Diyan', 'Iliev');
console.log(driver.getFirstName);
console.log(driver.getLastName);
driver.setFirstName = 'Patkan';
console.log(driver.getFirstName);
