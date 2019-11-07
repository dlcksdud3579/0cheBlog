"use strict";
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Person2.prototype.getName = function () {
        return this.fullName;
    };
    return Person2;
}());
var person2 = new Person("Chicken", "mini");
console.log(person.getName());
