"use strict";
function echo(data) {
    return data;
}
console.log(echo("PS"));
console.log(echo(67));
console.log(echo({ name: 'Ps', age: 67 }));
//if we dont mention the type in the generic function. we miss compilation errors. so we pass on type
//as T which would throw compilation error.
function betterEcho(data) {
    return data;
}
console.log(betterEcho("PS"));
console.log(betterEcho(67));
console.log(betterEcho({ name: 'Ps', age: 67 }));
//Built-in Generics
var testResults = [1.96, 7.89];
testResults.push(-2.99);
console.log(testResults.length);
//arrays
function printall(args) {
    args.forEach(function (element) { return console.log(element); });
}
printall(['yup', 'whatever']);
//Generic types
var echo2 = betterEcho;
//this means we are creating a const of generic Type T, which is assigned to the o/p of the function betterEcho 
//which takes i/p called "data" of type T and gives o/p of type T
console.log(echo2("something"));
//generic classes
var simpleMath = /** @class */ (function () {
    function simpleMath() {
    }
    simpleMath.prototype.calculate = function () {
        return +this.basicValue * +this.multiplyValue;
    };
    return simpleMath;
}());
var sm = new simpleMath();
sm.basicValue = "3";
sm.multiplyValue = 67;
console.log(sm.calculate());
////  exercise
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    return MyMap;
}());
var numMap = new MyMap();
numMap.setItem("apples", 90);
numMap.setItem("bananas", 89);
console.log(numMap.getItem("apples"));
numMap.printMap();
numMap.clear();
numMap.printMap();
