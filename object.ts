// cohesive

class Users{
    // declare the frilds
    name:string;
    age: number;
    address: string;

    // declared the method
    getName(){ 
        document.write('<br>User Name is ' + this.name);

    }

    // delcare the method for age
    getAge(){
        document.write('<br>User Age is ' + this.age);
    }

    // declare the method for address
    getAddress(){
        document.write('<br>User Address is ' + this.address);
    }
}

// creating the intance object of class

let usrDetails = new Users();
usrDetails.name = 'Rabi Kr yadav';
usrDetails.age = 25;
usrDetails.address = 'Janakpur Nepal';
usrDetails.getName();
usrDetails.getAge();
usrDetails.getAddress();
