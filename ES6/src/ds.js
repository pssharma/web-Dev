"use strict"

let myArray = [11,12,45,56,78];
let mySet = new Set(myArray); 



mySet.add('hi');

mySet.add({a:1,b:22});
mySet.delete(22);
console.log(mySet.size);
//mySet.clear();

mySet.forEach(function(val){
    console.log(typeof(val));
})

console.log(mySet);


///////////////MAP////////////

let myMap = new Map([['a1','Hello'],['b2','everyone']]);
myMap.set('c3','everything');
myMap.delete('a1');
console.log(myMap.size);

console.log(myMap);

////////////////WEAKSET///////////

let carwSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model : 'Civic'
}

carwSet.add(car1);
let car2 = {
    make: 'Toyota',
    model : 'Camry'
}

carwSet.add(car2);
carwSet.delete('car1');
console.log(carwSet);

///////WEAKMAP////

let carwMap = new WeakMap();

let key1 = {
    id:1
};

let key2 = {
    id:2
};

carwMap.set(key1,car1);
carwMap.set(key2,car2);
carwMap.delete(key1);

console.log(carwMap);
