console.log("IT works!");

//string
let myName = 'Ps';

//number
let num = 27.5;

//Boolean
let hasName = false; //cannot be casted to boolean if assigned to 1 or 0 as in js

//assign types
let myAge;
myAge = 21;
myAge = '21'; //since we dont assign it to particular type at declaration, it is assigned to type any

//array
let types: any = ["strings","numbers"];
types = [100];

//tuples not avaliable in js
let address:[string,number] = ["abc street", 99];
//cant reverse the order either
console.log(address);

//enums
enum Color {
Yellow = 34,
Red,
Blue
}
let myColor: Color = Color.Yellow;
console.log(myColor);


//any

let car: any = "Honda";
console.log(car);
car = {brand:"Honda",model:"crv"};
console.log(car);

//functions

function returnMyAge():number{    //assigning return type
return num;
}

console.log(returnMyAge());

//void return type
function sayHello():void{
console.log("Hello");
//return myName;  // will error out because return type is void
}

//argument types

function multiply(value1:number,value2:number):number{
return value1*value2;
}
console.log(multiply(2,5));

//function as types
 
 let myMultiply;
 myMultiply = multiply;
 myMultiply(5,6);
 myMultiply = sayHello;
 myMultiply();
 
 //assigning type to function
 
 let myMul: (val1:number, val2:number)=> number;
 myMultiply = sayHello;
 

//objects
let userData ={
name :"Ps",
age:27
};

/*userData={
a: "Hello",
b:22
};*/ //will throw an error because userData obj has name and age not a and b

//redeclare obj

let userDat: {name: string, age: number} = {
name:"ps",
age:27
} 


//complex object (putting it all together)

let complex: {data: number[], output: (all: boolean) => number[]} = {
data: [100,3.99,10],

output: function (all:boolean): number[]{
return this.data;
}
};

//creating complex types can be untidy
//so we use alias, we create the type of the complex object so that it can be reused

type Complex = {data:number[], output: (all:boolean) => number[]} ;

let complex2: Complex = {
data: [100,3.99,10],

output: function (all:boolean): number[]{
return this.data;
}
};



//union types

let myRealAge: number | string = 27;
myRealAge = "27";

//check types
let finalValue = "A string";
if(typeof finalValue == "string"){
console.log(finalValue)
}

//never type, only used to mention something that never should be reached

function neverReturns(): never{
   throw new Error('An error');
}

//nullable values, the variables which are initialized to be other type can be assigned a value null

let canBeNull = 12;
//canBeNull = null;

// add strictnullchecks to true on tsconfig to assign no null values to objects
// can be overcome if its a union type

let canBeNullToo: number | null = 12;
canBeNullToo = null;







