import {
    USER_DATA,adduser,addmultiple,edituser,deleteuser
} from './userModules.js';
addmultiple([
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
                Email :'Swathi@gmail.com'}]);
console.log(USER_DATA)

//one module can have only one default export


