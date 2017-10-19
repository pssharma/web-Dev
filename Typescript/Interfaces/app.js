"use strict";
function greet(person) {
    console.log("Hello, " + person.name);
}
var pearson = {
    name: 'PS',
    age: 67,
    hobbies: ["cooking", "working"],
    great: function (lastName) {
        console.log("Hey I am, " + this.name + " " + lastName);
    }
};
var NewPerson = /** @class */ (function () {
    function NewPerson() {
    }
    NewPerson.prototype.great = function (lastName) {
        console.log("Hey I am, " + this.name + " " + lastName);
    };
    return NewPerson;
}());
greet(pearson);
pearson.great("Anything");
//greet({name: 'PS',age: 67}); // this gets strictly checked and throws the error ageis not defined. Becaus ewe pass on the whole object rather than variable.
//so if we wanna pass optional parameters we put '?' beside it.
// 
var pearson2 = new NewPerson();
pearson2.name = "PS";
pearson2.lastName = "heya";
pearson2.great(pearson2.lastName);
var myFoubleValueFunction;
myFoubleValueFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myFoubleValueFunction(4, 5));
var oldPerson = {
    age: 27,
    name: 'Ps',
    great: function (lastName) {
        console.log('HEllo');
    }
};
oldPerson.great('whatever');
