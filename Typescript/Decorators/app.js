"use strict";
//decorator is basically a function you create, which takes constructor as an argument.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person2 = /** @class */ (function () {
    function Person2() {
        console.log("Hi!");
    }
    Person2 = __decorate([
        logged
    ], Person2);
    return Person2;
}());
//Factory 
function logging(value) {
    return value ? logged : undefined;
}
//Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant2 = /** @class */ (function () {
    function Plant2() {
        this.name = "Green";
    }
    Plant2 = __decorate([
        logged,
        printable
    ], Plant2);
    return Plant2;
}());
var plant2 = new Plant2();
plant2.print();
// Method decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var Project2 = /** @class */ (function () {
    function Project2(name) {
        this.projectName = name;
    }
    Project2.prototype.calculateBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false)
    ], Project2.prototype, "calculateBudget", null);
    return Project2;
}());
var project = new Project2("new project");
project.calculateBudget();
project.calculateBudget = function () {
    console.log(2000);
};
project.calculateBudget();
