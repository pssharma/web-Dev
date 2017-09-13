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
