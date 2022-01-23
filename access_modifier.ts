class UserData{
   
    constructor(protected username:string, private userage:number, public useraddr?:string){
    }
    userData(){
        document.write('<br>The User Name is ' + this.username + '<br> User Age is ' + this.userage + '<br>User Address is ' + this.useraddr);
    }   
}
// creating the intance object of class
let usrObjAccess = new UserData('Rabi Kr Yadav',25,'Janakpur Nepal');
usrObjAccess.userData();

