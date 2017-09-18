"use strict"

function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixarray = function(arr){
    let that = this;
    return arr.map((x) =>{
        console.log(that.prefix +x);
    });
}

let pre = new Prefixer('Hello ');
pre.prefixarray(['P','r']);


/*let add = function(a,b){
    let sum = a+b;
    console.log(sum);
    return false;
}*/

let add = (a,b) => {
    let sum = a+b;
    console.log(sum);
    return false;
}

add(9,8);

