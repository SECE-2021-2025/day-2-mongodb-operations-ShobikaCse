// DOM => html is represented as tree structure
// DOM : Document Object Model


// document.body.style.backgroundColor = "white";
//  const allChild = document.body.children;

// setInterval(function () 
//     {  // allChild[0].innerText = "RED";
//         allChild[0].style.color = refresh_value ?"red":"green";
//         
//     }, 1000);
//  const tag = document.getElementsByClassName('sece');
//  tag[0].innerText = "hbjkijkdfkkskfmdk";
//  console.log(tag);


// //  setInterval(function (tag) 
// //     {  // allChild[0].innerText = "RED";
// //         tag[0].style.color = refresh_value ?"red":"green";
// //         
// //     }, 1000);


//  const id = document.getElementById("unique");
//  id.innerText="id based selection"




 // setInterval(function () 
//     {   //allChild[1].innerText = "ORANGE";
//         allChild[1].style.color = "orange";}, 6000);
// setInterval(function () 
//     {   //allChild[2].innerText = "GREEN";
//         allChild[2].style.color = "green";}, 9000);

const button = document.getElementById('login_button');
const username = document.getElementById('user');
const password = document.getElementById('pass');
const form = document.getElementById('login');

button.addEventListener('click',(event)=>{
     console.log('click');
});
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('submit',username.ariaValueMax,password.value);
});



 