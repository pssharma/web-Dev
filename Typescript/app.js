"use strict";
console.log("IT works!");
//string
var myName = 'Ps';
//number
var num = 27.5;
//Boolean
var hasName = false; //cannot be casted to boolean if assigned to 1 or 0 as in js
//assign types
var myAge;
myAge = 21;
myAge = '21'; //since we dont assign it to particular type at declaration, it is assigned to type any
//array
var types = ["strings", "numbers"];
types = [100];
//tuples not avaliable in js
var address = ["abc street", 99];
//cant reverse the order either
console.log(address);
//enums
var Color;
(function (Color) {
    Color[Color["Yellow"] = 34] = "Yellow";
    Color[Color["Red"] = 35] = "Red";
    Color[Color["Blue"] = 36] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Yellow;
console.log(myColor);
//any
var car = "Honda";
console.log(car);
car = { brand: "Honda", model: "crv" };
console.log(car);
//functions
function returnMyAge() {
    return num;
}
console.log(returnMyAge());
//void return type
function sayHello() {
    console.log("Hello");
    //return myName;  // will error out because return type is void
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
//function as types
var myMultiply;
myMultiply = multiply;
myMultiply(5, 6);
myMultiply = sayHello;
myMultiply();
//assigning type to function
var myMul;
myMultiply = sayHello;
//objects
var userData = {
    name: "Ps",
    age: 27
};
/*userData={
a: "Hello",
b:22
};*/ //will throw an error because userData obj has name and age not a and b
//redeclare obj
var userDat = {
    name: "ps",
    age: 27
};
//complex object (putting it all together)
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealAge = 27;
myRealAge = "27";
//check types
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log(finalValue);
}
//never type, only used to mention something that never should be reached
function neverReturns() {
    throw new Error('An error');
}
//nullable values, the variables which are initialized to be other type can be assigned a value null
var canBeNull = 12;
//canBeNull = null;
// add strictnullchecks to true on tsconfig to assign no null values to objects
// can be overcome if its a union type
var canBeNullToo = 12;
canBeNullToo = null;
