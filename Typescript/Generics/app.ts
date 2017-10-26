function echo(data : any){
    return data;
}

console.log(echo("PS"));
console.log(echo(67));
console.log(echo({name:'Ps',age:67}));

//if we dont mention the type in the generic function. we miss compilation errors. so we pass on type
//as T which would throw compilation error.
function betterEcho<T>(data: T){
return data;
}
console.log(betterEcho("PS"));
console.log(betterEcho(67));
console.log(betterEcho({name:'Ps',age:67}));

//Built-in Generics

const testResults : Array<number> = [1.96,7.89];
testResults.push(-2.99);
console.log(testResults.length);

//arrays
function printall<T>(args: T[]){
    args.forEach((element) => console.log(element));
}

printall<string>(['yup','whatever']);

//Generic types

const echo2: <T>(data: T) => T = betterEcho;

//this means we are creating a const of generic Type T, which is assigned to the o/p of the function betterEcho 
//which takes i/p called "data" of type T and gives o/p of type T

console.log(echo2<string>("something"));

//generic classes
class simpleMath<T extends number | string,U extends number>{
    basicValue: T;
    multiplyValue: U;

    calculate(): number{
        return +this.basicValue * +this.multiplyValue;
    }
}

const sm = new simpleMath<string,number>();
sm.basicValue = "3";
sm.multiplyValue = 67;
console.log(sm.calculate());

////  exercise

class MyMap<T>{
    private map: {[key: string]:T} = {};

    setItem(key: string, item: T){
        this.map[key] = item;

    }
    getItem(key: string){
        return this.map[key];
    }

    printMap(){
        for(let key in this.map){
            console.log(key,this.map[key]);
        }
    }

    clear(){
        this.map = {};
    }
}

const numMap = new MyMap<number>();
numMap.setItem("apples",90);
numMap.setItem("bananas",89);

console.log(numMap.getItem("apples"));
numMap.printMap();
numMap.clear();
numMap.printMap();

