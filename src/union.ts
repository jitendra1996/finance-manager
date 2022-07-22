// union types

// import { points } from './app';

let username:string|number = 'jitendra kumar';

const arr:(string|number|boolean)[] = [];


const obj:{user:string,age:number,isMarried:boolean,job:string,skills:string[]}={user:'jk',age:23,isMarried:false,job:'full stack developer',skills:['c++','javascript']};


obj.user = "Rohit yadav";
obj.job = 'frontend developer';

arr.push(true);
arr.push('Rahult tomar');
arr.push(25);

console.log(username);
console.log(arr);
console.log(obj);

const printGreet = (name : string,greet:string):string => {
    return `Hello ${name} , ${greet}`;
}

console.log(printGreet("jitendra kumar","How are you"));



const getFirstThree = (x:number[]|string):void => {
    console.log(x.slice(0,3));
    return;
}

getFirstThree([1,2,3,4,5,6,7]);
getFirstThree("prateek rajput");


const box = document.getElementById('box')!;

box.addEventListener('mousemove',e=>{
    e.preventDefault();
    console.log(points(e.offsetX,e.offsetY));
});

const points = (x:number,y:number):string => {
    return `x : ${x} , y : ${y}`;
};


//type Aliase
type firstname = number|string;