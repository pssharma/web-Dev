"use strict"

function testVar(){
    var a = 30;
    if(true){
        var a =50;
        console.log(a);
        
    }
    console.log(a);
}

testVar();

function testLet(){
     let a = 30;
    if(true){
        let a =50;
        console.log(a);
        
    }
    console.log(a);
    
}

testLet();

const colors = [];
colors.push("yellow");
colors.push("blue");

console.log(colors);

colors = "green";


