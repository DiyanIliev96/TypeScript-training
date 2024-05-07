"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
var Driver = /** @class */ (function () {
    function Driver(fName, lName) {
        this._firstName = fName;
        this._lastName = lName;
    }
    Object.defineProperty(Driver.prototype, "getFirstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "setFirstName", {
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "getLastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "setLastName", {
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Driver;
}());
exports.Driver = Driver;
