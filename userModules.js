 export const USER_DATA =[{
    id:1,
    Name: 'ram',
    Age:20,
    Email:'abcram@gmail.com'
}
];

//CURD 
// const adduser = (new_user)
// adds new user
//const edituser = (id = 1,key = 'Name, value='ggg')
// edits value
//const deleteuser = (id) =>{
//  delete particular data

const newuser = {
    id :2,
    Name: 'Srijaa',
    Age: 21,
    Email: 'srijaa@gamil.com'
};

// to add
export const adduser = (newuser)=> {
    USER_DATA.push(newuser)
}

// to add multiple objects
export const addmultiple = (array)=>{
    for(let i in array)
    {
        USER_DATA.push(array[i])
    }

}

// to edit
 export const edituser = (editval,key,Changevalue )=>{
 const index = USER_DATA.findIndex(obj => obj.id === editval);
 if(index != -1){
 USER_DATA[index][key]=Changevalue;}
}

// to delete
export const deleteuser = (deleteid)=>{
    const index = USER_DATA.findIndex(obj => obj.id === deleteid);
    // to delete last element
    //USER_DATA.pop(deleteid);
    USER_DATA.splice(index,1);
}

//to edit mutiple values
/*export const editmultiple = (id = 1, updateval = {
    Name:'rrr',
    Age:21
}) => {
    const u_index = USER_DATA.findIndex(u => u.id === id);
    if(u_index == -1)
    {
        USER_DATA [u_index]={
            ...USER_DATA[u_index],
            ...updateval
        }
    }
}*/
/*export const editmultiple = (id = 1, updateval = {
    Name:'rrr',
    Age:21
}) => {
    const u_index = USER_DATA.findIndex(u => u.id === id);
    if(u_index == -1)
    {
        USER_DATA [u_index]={
            ...USER_DATA[u_index],
            ...updateval
        }
    }
}*/
/*adduser(newuser);
console.log(USER_DATA);
edituser(1,'Name','SwathiVasu');
console.log(USER_DATA);
deleteuser(2);
console.log(USER_DATA);*/

/*addmultiple(
    {id : 10,
    Name:'Sharmi',
    Age : 19,
    Email :'Sharmi@gmail.com'},
    {id : 15,
        Name:'Vasumathi',
        Age : 19,
        Email :'vasu@gmail.com'},
        {id : 13,
            Name:'Srijaa',
            Age : 19,
            Email :'srijaa@gmail.com'},
            {id : 12,
                Name:'Swathi',
                Age : 19,
                Email :'Swathi@gmail.com'});
*/
/* EXPORT DEFAULT:
   At last declare "export default USER_DATA"
   If we give export default in import we can give
   import USER_DATA,{adduser} from "./userModules.js"
*/