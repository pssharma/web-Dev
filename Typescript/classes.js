"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 33; // within class and also the classes that inherit
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("coder");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("ps", "PS");
console.log(person);
console.log(person.printAge());
//console.log(person.setType("coder")); // wont work with private method
//////   
console.log("INHERITANCE");
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(username) {
        var _this = _super.call(this, "PS", username) || this;
        _this.name = "PS"; //will overwrite nam eproperty in person class
        _this.age = 34;
        return _this;
        //console.log(this.type); // wont work because private not accessible through sub classes
    }
    return Male;
}(Person));
var ps2 = new Male("San");
console.log(ps2);
/// when we pass on with the sub class constructor the variable's value is not overwitten it still prints PS as set in male
var ps = new Person("San", "PS");
console.log(ps);
/// when we pass on with the super class constructor the variable's value is overwitten it  prints san as set in constructor
console.log("GETTERS & SETTERS");
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Whatever";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Dessert";
console.log(plant.species);
/////////////////
console.log("STATIC Methods and properties");
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.circumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.143271; //you can use this property even if we dont instatntiate the class
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.circumference(8));
//////
console.log("ABSTRACT CLASSES");
// cant be instantiated but only be extended
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Abstract";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget = 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //have to implement all the abstract classes that are in the super abstract classes
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("SUPER Project");
console.log(newProject);
