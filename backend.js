// PROMISES 
// PROMISES state - Pending,Reject,Resolve

/*const promisex = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("resolved")
    },4000)
})

promisex
.then((value) => console.log(value))
.catch(() => console.log("error"));
//
const promisexs = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved")
    },4000)
})

promisexs
.then((value) => console.log(value))
.catch(() => console.log("error"));
*/
// API CALL

const apicall = async() =>{
    try{
    const promiseapi = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await promiseapi.json();
    console.log(data);
    }
    catch (error)
    {
        console.log("hi error")
    }
}
apicall();