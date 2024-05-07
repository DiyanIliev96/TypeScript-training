export class Driver {

    private _firstName: string;
    private _lastName: string;

    constructor(fName: string,lName: string) {
        this._firstName = fName;
        this._lastName = lName;
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








