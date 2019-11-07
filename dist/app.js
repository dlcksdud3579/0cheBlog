"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Person.prototype.getName = function () {
        return this.fullName;
    };
    return Person;
}());
var person = new Person("Chicken", "mini");
console.log(person.getName());
