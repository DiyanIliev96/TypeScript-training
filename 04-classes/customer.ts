class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(fName: string,lName: string) {
        this._firstName = fName;
        this._lastName = lName;
    }

    public getFirstName(): string {
        return this._firstName;
    }

    
    
    public setFirstName(value: string): void {
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



console.log(customer.getFirstName());
customer.setFirstName('Ivan');
console.log(customer.getFirstName());
console.log(customer.getLastName);
customer.setLastName = 'Ivanov';
console.log(customer.getLastName);




