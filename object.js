// cohesive
var Users = /** @class */ (function () {
    function Users() {
    }
    // declared the method
    Users.prototype.getName = function () {
        document.write('<br>User Name is ' + this.name);
    };
    // delcare the method for age
    Users.prototype.getAge = function () {
        document.write('<br>User Age is ' + this.age);
    };
    // declare the method for address
    Users.prototype.getAddress = function () {
        document.write('<br>User Address is ' + this.address);
    };
    return Users;
}());
// creating the intance object of class
var usrDetails = new Users();
usrDetails.name = 'Rabi Kr yadav';
usrDetails.age = 25;
usrDetails.address = 'Janakpur Nepal';
usrDetails.getName();
usrDetails.getAge();
usrDetails.getAddress();
