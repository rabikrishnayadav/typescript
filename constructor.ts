class Users{
    // declare the frilds
    name:string;
    age: number;
    address: string;

    // crating the construnctor
    // inside the constructor parameter ? operator is used for make the feild optional
    // 'this' keyword refer to the current instance of the class
    constructor(username:string, userage:number,useraddr?:string){
        this.name = username;
        this.age = userage;
        this.address = useraddr;
    }

    userData(){
        document.write('<br>The User Name is ' + this.name + '<br> User Age is ' + this.age + '<br>User Address is ' + this.address);
    }
    
}

// creating the intance object of class

let usrObj = new Users('Rabi Kr Yadav',25,'Janakpur Nepal');
usrObj.userData();

