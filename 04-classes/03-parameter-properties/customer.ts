class Customer {

  

    constructor(private _firstName: string,private _lastName: string) {
       
    }

    get getFirstName(): string {
        return this._firstName;
    }

    
    
    set setFirstName(value: string) {
        this._firstName = value;
    }
    
    get getLastName(): string {
        return this._lastName;
    }

    set setLastName(value: string) {
        this._lastName = value;
    }
}

const customer = new Customer('Diyan','Iliev');



console.log(customer.getFirstName);
console.log(customer.getLastName);
customer.setFirstName = 'Patkan';
console.log(`${customer.getFirstName} ${customer.getLastName}`);







