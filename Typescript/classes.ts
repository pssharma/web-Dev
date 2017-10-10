class Person{
    public name: string;// public is access control, which is default
    private type: string; //accessible only available within this object
    protected age: number = 33; // within class and also the classes that inherit
    
    constructor(name: string, public username:string){
    this.name = name;
    
    
    }
    
    printAge(){
    console.log(this.age);
    this.setType("coder");
    }
    
   private setType(type: string){
    this.type = type;
    console.log(this.type);
    }
    

}

const person = new Person("ps","PS");
console.log(person);
console.log(person.printAge());
//console.log(person.setType("coder")); // wont work with private method


//////   
console.log("INHERITANCE");

class Male extends Person{

name = "PS" ; //will overwrite nam eproperty in person class
 constructor(username: string){
 super("PS",username);
 this.age = 34; 
 //console.log(this.type); // wont work because private not accessible through sub classes
 
 
 }

}

const ps2 = new Male("San");
console.log(ps2);
/// when we pass on with the sub class constructor the variable's value is not overwitten it still prints PS as set in male
const ps = new Person("San","PS");
console.log(ps);
/// when we pass on with the super class constructor the variable's value is overwitten it  prints san as set in constructor

console.log("GETTERS & SETTERS");

class Plant{

private _species: string;

get species(){
return this._species;
}

set species(value: string){
if(value.length > 3){
this._species = value;

}else{
this._species = "Whatever";
}


}


}

let plant = new Plant();
console.log(plant.species);
plant.species = "Dessert";
console.log(plant.species);

/////////////////
console.log("STATIC Methods and properties");

class Helpers{

 static PI: number = 3.143271; //you can use this property even if we dont instatntiate the class
 static circumference(diameter:number):number{
   return this.PI * diameter;
 }
}

console.log(2* Helpers.PI);
console.log(Helpers.circumference(8));

//////

console.log("ABSTRACT CLASSES");
// cant be instantiated but only be extended

abstract class Project {
 projectName: string = "Abstract";
 budget: number = 1000;
 
 abstract changeName(name: string): void; //if a method is abstract then it must be implemented by the extended class
 
 calcBudget(){
 return this.budget = 2;
 }
}

class ITProject extends Project{
//have to implement all the abstract classes that are in the super abstract classes

changeName(name: string) : void{
this.projectName = name;
}
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("SUPER Project");
console.log(newProject);


////////
console.log("Private constructors and singletons");

let wrong = new OnlyOne('The only one');









