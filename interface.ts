// for creating interface then its name first letter must be Capital

// here is creating the interface for user detail property

interface User{
    name:string,
    email:string,
    age:number,
    address:string
}

// here is creating the function for use the interface

let userdetails = (userdata : User)=>{
    console.log('User Name is '+ userdata.name + 'Email: ' + userdata.email + 'User Age is: ' + userdata.age + 'Address: ' + userdata.address);
    document.write('User Name is '+ userdata.name + '<br> Email: ' + userdata.email + '<Br> User Age is: ' + userdata.age + '<br> Address: ' + userdata.address);
}

// passing the value in function

userdetails({
    name: 'Rabi Kr Yadav',
    email: 'rabikrishanyadav@gmail.com',
    age: 25,
    address: 'janakpur, Nepal'
});