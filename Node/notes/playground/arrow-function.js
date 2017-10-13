var square = (x) => x * x;
console.log(square(9));

var user = {
    name: 'PS',
    sayHi: () => {
        console.log('Hi');
    },
    sayHiAlt () {
        console.log(`Hi i'm ${this.name}`);
    }
};

user.sayHiAlt('1','2','3');
