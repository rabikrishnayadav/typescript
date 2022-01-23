var Users = /** @class */ (function () {
    // crating the construnctor
    // inside the constructor parameter ? operator is used for make the feild optional
    // 'this' keyword refer to the current instance of the class
    function Users(username, userage, useraddr) {
        this.name = username;
        this.age = userage;
        this.address = useraddr;
    }
    Users.prototype.userData = function () {
        document.write('<br>The User Name is ' + this.name + '<br> User Age is ' + this.age + '<br>User Address is ' + this.address);
    };
    return Users;
}());
// creating the intance object of class
var usrObj = new Users('Rabi Kr Yadav', 25, 'Janakpur Nepal');
usrObj.userData();
