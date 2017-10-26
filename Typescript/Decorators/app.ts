//decorator is basically a function you create, which takes constructor as an argument.

function logged(constructorFn: Function){
    console.log(constructorFn);
}

@logged
class Person2 {
    constructor(){
        console.log("Hi!");
    }

}

//Factory 
function logging(value: boolean){
    return value ? logged : undefined;
}

//Advanced

function printable(constructorFn: Function){
    constructorFn.prototype.print = function(){
        console.log(this);
    }
}

@logged
@printable
class Plant2{
    name = "Green";
}

const plant2 = new Plant2();
(<any>plant2).print();


// Method decorators

function editable(value: boolean){
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}


class Project2{
    projectName: string;
    
    constructor(name: string){
        this.projectName = name;
    }
    @editable(false)
    calculateBudget(){
        console.log(1000);
    }
}

const project = new Project2("new project");
project.calculateBudget();
project.calculateBudget = function(){
    console.log(2000);
};
project.calculateBudget();

