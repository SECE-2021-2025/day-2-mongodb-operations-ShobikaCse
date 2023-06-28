let a = "shobika";
const name ="xxx";
var b=10;
var b=12;
console.log(b);
console.log(a);

var c=100
{
    var c =19;
    console.log(c);
}
console.log(c);

let d =10;
let d=12;

//let c =10.2;
// number = integer,float,infinity,-infinity,multiple symbols,nan
//let s = 1/0;
//console.log(c);
//console.log(s);
//let a=10;
//let b=12;
//console.log("addition of two numbers"+a+ " and"+b+"=",a+b);
//console .log(`addition of twonumbers $(a) and $(b) is $(a+b)`);
console.log(a*b);
console.log(a/b);
console.log(a-b);
let t = "1"*0;
console.log(c);

// bidint 2^53
// to convert into big int add just n
let star = 10n;
console.log(star,typeof(star));

//string 
//null- empty
let obj = null;
// undefineg - not defined
let o;//o/p == undefined
console.log(o);
//boolean
//const bool = true;
console.log(sece);
var sece="123";
// var moves sece to top and will not declare any value so output: undefined
// memory will be created before compilation
console.assert(gt)
let gt = 10;
// let will show error because let won't take to the top
const user = Object.freeze({Name : 'xxx',age:22,Dept:'CSE'});
console.log(user);
//let
let user1 = {Name : 'yyy',age:20,Dept:'CSE'};
console.log(user);
user.school='wwww';
console.log(user);
delete user.Dept ;
console.log(user)
//object.freeze won't allow updation
//to print only keys
console.log(Object.keys(user));
//another way
const usert = Object.keys({Name : 'xxx',age:22,Dept:'CSE'});
//same for 'values'

// mutation concept 
// only application for object
//object means key value pair
const userx={
    name:'x',age : 23
};
const usery = userx;
usery.age=45;
console.log(userx,
    usery);
// spread operator (...)
const xz = {
    ...userx,
    age:30,
};//spread operator ... to copy completely into another
console.log(xz);
const details = {
    address:{
        street :'s street',
        city: 'coimbatore'
    }
}
console.log(details.city);
console.log(details.name);
console.log(details.address.city);

const detail ={
    car:'swift'
};
console.log(detail.address.car)//o/p = error
console.log(deatail.address?.car)//o/p= undefined
console.log(detail.car)//o/p =
// to create  function
function sum(num1,num2)
{
    if(typeof(num1) === 'number' && typeof(num2) === 'number')
   {
      return num1+num2;
   }
   else{
    console.log(`INVALID NUMBER`)
   }
}
console.log(sum('asd',40));
double equal to in javascript : only check the value 
for example a=10;
            b='10';
            in == ,
            o/p==> true
 in triple equal to in javascript : check both value and 
datatype a= 10;
         b= '10'
         in ===,
         o/p==> false 



// arrow function 
const sums =(num1,num2) =>
{
    return num1+num2;
}
console.log(sums(23,10));

//Immediately Invoked function expression iife
(function sun(n1,n2)
{
    console.log( n1+n2);
})(21,12);

/*Higher order function : when on e function has another function 
as parameter and also when one function returns another function
Call back function: the function which is passed as parameter 
is known as call back function.
*/

// example
const sumS = (n01,n02) => n01+n02;
const sub = (n01,n02)=> n01-n02;
const multiple = (n01,n02)=> n01*n02;
const div = (n01,n02) => n01/n02;

const calculator = {num1,num2,operation} => {
    return operation(num1.num2);
}

console.log(calculator(10,20,sum));



let str2 = "       I am studying in sece ";
console.log(str2.trim());


let arr = [
    1,
    undefined,
    true,
    "123",
    '4',
    [1,2,3,4,5],
    (num1) => num1*5,
    {a:1,b:2,c:3,say_hello:()=>"hello"}
];
console.log(arr[8].say_hello())

let arr3 = [1,2,3,4,5];
let arr4l = [6,7,8,9,10];
let array = arr3.concat(arr4);
console.log(array);

let names = [1,2,3,4,5,6];
console.log(names.splice(2,2,23,45,66));
console.log(names);

let g = [1,2,3,4];
console.log(g.splice(4,0,123,234,567));
console.log(g)


let str = "sri eshwar college";
let strs  = str.split(" ");
console.log(strs);

let l = [1,2,3,4,"qq","www","q"];
let l2 = l.join("");
console.log(l2);

let names1 = "madhu akshaya priya ishwarya saranya";
names1 =  names1.split(" ");
for(let i =0; i<names1; i++)
{
    let word = names1[i].charAt(0).toUpperCase()+
    names1[i].slice(1,);
}
console.log(names1);

//join operator to join array as string

let arrau = [1,2,3,4,4];
tex = arrau.join("");
console.log(tex);
