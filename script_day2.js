/*//PALINDROME

function palindrome(st,rs)
{
    if(st === rs)
    {
        console.log("It is Palindrome!")
    }
    else{
        console.log("Not A Palindrome");
    }
}

let a = "malayalam";
let b= a.split('').reverse().join('');
palindrome(a,b);



//for in loop 
let obj ={
    a:23,b:34,c:33
};
for(let key in obj){
    console.log(key,Object.key);
}

//For in loop in array will return index value 
// so we use FOR OF to fetch the values directly

// for in loop in array

let o = [1,2,3,4,5];
for(let key in o)
{
    console.log(key,key[o]);//to fetch both index & value
}

// for of loop in array

let i =[1,2,3,3];
for(let k of i)
{
    console.log(k);
}*/
/*
//ARRAY CALLBACK FUNCTION

let sece = ["s","we","df","qq"];
sece.forEach((key) =>{
    console.log(key);
})
//o/p:s
    //  we
     // df
     // qq

// also run when we pass only one argument
//even if it is zero we need to follow above syntax


let sece2 = ["s","we","df","qq"];
sece.forEach(key =>{
    console.log(key);
})
//o/p:s
     // we
      // df
     // qq

// it runs even in
// more than one statements curly braces is must in 
//arrow function

let sece3 = ["s","we","df","qq"];
sece.forEach(key => console.log(key));
//o/p:s
    //  we
     // df
      //qq

// map() convert singlee elements into array.

let t = sece3.map(key => {
    return key.repeat(2)
});
console.log(t);//o/p:['ss', 'wewe', 'dfdf', 'qqqq']
*/
//filter()
/*
let w = [1,2,3,4];
//EVEN NUMBER => 2,4
let s = w.filter(key => !(key%2));
console.log(s);
//ODD NUMBERS => 1,3
let s1 = w.filter(key => (key%2));
console.log(s1);

//To return array above yr 2002

let n =[
{
    Name:"Shobika",
    DoB:2003
},
{
    Name:"Vasumathi P",
    DoB:2005
},
{
    Name:"Srijaa",
    DoB:2001
}]
let l = n.filter(key => ((key.DoB)>2002));
console.log(l);
//o/p:  
//{Name: 'Shobika', DoB: 2003}
//{Name: 'Vasumathi', DoB: 2005}

//shallow copy

const array = [1,2,3];
array[1]=56;
console.log(array);//o: [1, 56, 3]

const array1 = [1,2,3];
const array2 = array1;
array1[1]=56;
console.log(array1);//o: [1, 56, 3]
console.log(array2);//o: [1, 56, 3]

//deep copy


const array3 = [1,2,3];
const array4 = [...array3];
array3[1]=56;
console.log(array3);//o: [1, 56, 3]
console.log(array4); //o:  [1, 2, 3]

// duplicate keys allowed

const onn ={
    Name:"www",
    dob:2008,
    Name:"sss"
};
console.log(onn);//{Name: 'sss', dob: 2008}
// value over writed but does not change the order

//task: employee_name ,age , salary,phone number
// o/p:
let employee = [{
    Employee_name: "ANU",
    Age:20,
    Salary:35000,
    Ph_no: 1223244345454
},
{
    Employee_name: "NIVETHA",
    Age:19,
    Salary:50000,
    Ph_no: 1223244345454
},
{
    Employee_name: "KOWSHIKA",
    Age:18,
    Salary:20000,
    Ph_no: 1223244345454
}];
let f = employee.filter(key=> (key.Salary > 25000)).map(({Employee_name,Age})=>({Employee_name,Age}));
console.log(f);

// ANOTHER  WAY
let e = employee.filter(key=> (key.Salary > 25000)).map(key =>{
    return {Employee_name: key.Employee_name ,Age:key.Age};
});
console.log(e);

// ARRAY - De-sturcturing --> unpacking elements

let array_num = [10,20,30,40,45];
let [a1,a2,a3,a4,a5] = array_num;
console.log(array_num)

// REST OPERATOR = ... which stores in array
// rest element must be last element

let d = [12,34,546,77,889,9,121];
let [a,b,...c]=d;
console.log(c);// o: [546, 77, 889, 9, 121] 
// here a=12,b=34

// , comma operator =>  to skip

let r = [1,2,3,4,5,6,7,8,9,10]
let[g,h, , , o]=r;
console.log(g,h,o);//o:1 2 5 

// task 
let r1 = [1,2,3,4,5,6,7,8,9,10]
let[g1,h1, , , o1,...h2]=r;
console.log(g1,h1,o1,h2); //o: [6, 7, 8, 9, 10]

// OBJECT - De-sturcturing --> unpacking elements

let m = {
    clgname : 'sece',
    year:2032,
    city:"ciombatore",
    dept:"cse",
    package:12
};
let{clgname,year,city,...remaining}=m;
console.log(clgname,year,city,remaining)

// RENAME OPERATOR
//oldname:new name

let mango = {
    clgname : 'sece',
    year:2032,
    city:"ciombatore",
    dept:"cse",
    package:12
};
let {clgname:z,year:x,city:y,...rest}=mango;
console.log(z,x,y,rest);

//Default parameter

let orange= {
    clgname : 'sece',
    year:2032,
    city:"ciombatore",
    dept:"cse",
    package:12
};
let {clgname:z1,year:x2,city:y3,salary=12}=orange;
console.log(z1,x2,y3,salary);//o: sece 2032 ciombatore 12

//Default parameter

let apple= {
    clgname : 'sece',
    year:2032,
    city:"ciombatore",
    dept:"cse",
    package:12,
    sal:24
};
let {clgname:z2,year:x3,city:y4,sal=12}= apple;
console.log(z2,x3,y4,sal);//o: sece 2032 ciombatore 24
*/
// To print  the statement in 3sec in website
// set time out

//setTimeout(()=> console.log("hello"),"3000");

// to print in every 3sec 
//setInterval

//setInterval(()=> console.log("hello!"),"3000");

/*console.log("www")
setTimeout(()=> console.log("hello"),"0");
console.log("kkkk")*/
//www
// kkkk
// hello

// Asynchronize call
import {
    USER_DATA,adduser,edituser,deleteuser,
    editmultiple
} from './userModules.js';
adduser(
    {id : 10,
    Name:'Sharmi',
    Age : 19,
    Email :'Sharmi@gmail.com'});
console.log(USER_DATA)








