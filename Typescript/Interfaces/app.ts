interface NameOFPerson{
    name: string;
    age? :Number; //do not know type of the value
    [propName : string] : any; //do not know the name and type of the value
    great(lastName: string):void;
}

function greet(person: NameOFPerson){
    console.log("Hello, "+person.name);
}

const pearson = {
    name: 'PS',
    age: 67,
    hobbies: ["cooking","working"],
    great(lastName: string){
        console.log("Hey I am, "+ this.name+" "+lastName);

    }
};

class NewPerson implements NameOFPerson{
    name: string;
    lastName: string;
    great(lastName: string){
        console.log("Hey I am, "+ this.name+" "+lastName);

    }


}

greet(pearson);
pearson.great("Anything");

//greet({name: 'PS',age: 67}); // this gets strictly checked and throws the error ageis not defined. Becaus ewe pass on the whole object rather than variable.
//so if we wanna pass optional parameters we put '?' beside it.
// 


const pearson2 = new NewPerson();
pearson2.name = "PS";
pearson2.lastName = "heya";
pearson2.great(pearson2.lastName );




//// using interfaces and functions

interface DoubleValueFunc{
    (number1:number, number2:number):number;
}


let myFoubleValueFunction :DoubleValueFunc;
myFoubleValueFunction = function(value1: number, value2: number){
    return (value1+value2) *2;
}

console.log(myFoubleValueFunction(4,5));

//Interface Inheritance

interface AgedPerson extends NameOFPerson {
  age: number;
}

const oldPerson:AgedPerson = {
    age: 27,
    name: 'Ps',
    great(lastName:string){
        console.log('HEllo');
    }
}

oldPerson.great('whatever');
