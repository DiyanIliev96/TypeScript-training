var Customer = /** @class */ (function () {
    function Customer(fName, lName) {
        this._firstName = fName;
        this._lastName = lName;
    }
    Customer.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer.prototype.setFirstName = function (value) {
        this._firstName = value;
    };
    Object.defineProperty(Customer.prototype, "getLastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setLastName", {
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer = new Customer('Diyan', 'Iliev');
console.log(customer.getFirstName());
customer.setFirstName('Ivan');
console.log(customer.getFirstName());
console.log(customer.getLastName);
customer.setLastName = 'Kunchev';
console.log(customer.getLastName);
