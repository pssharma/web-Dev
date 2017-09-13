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
 


