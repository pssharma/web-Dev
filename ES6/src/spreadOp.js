const numbers = [1,10,90,-5];
console.log(Math.max(...numbers)); //spread operator


// Rest Parameter

function makeArray(...args){
    return args;
}
console.log(makeArray(1,2));


//destructuring

const myFriends = ['raj','rah','lax'];

console.log(myFriends[0],myFriends[1],myFriends[2]);

const [friend1,friend2,freind3] = myFriends;

console.log(friend1,friend2,freind3);

//destructuring objects

const userData = {username: "Max",age:27};
console.log(userData.username,userData.age);

const {username,age} = userData //make sure keys in the destructing match the keys in the object

console.log(username,age);

//if you wanna use different nmaes for the keys then you can use it using :
//username:myName age:myAge


