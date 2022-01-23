var UserData = /** @class */ (function () {
    function UserData(username, userage, useraddr) {
        this.username = username;
        this.userage = userage;
        this.useraddr = useraddr;
    }
    UserData.prototype.userData = function () {
        document.write('<br>The User Name is ' + this.username + '<br> User Age is ' + this.userage + '<br>User Address is ' + this.useraddr);
    };
    return UserData;
}());
// creating the intance object of class
var usrObjAccess = new UserData('Rabi Kr Yadav', 25, 'Janakpur Nepal');
usrObjAccess.userData();
