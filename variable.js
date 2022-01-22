// there are two method for declare the variable in typescript
// 1) with var keryword
function varKeywordFun() {
    for (var i = 0; i < 5; i++) {
        document.write(i + '<br>');
    }
    document.write("Uses var keyword Outside the block" + i + '<br>'); // here we can use from the outside the block
}
varKeywordFun();
// 2) with let keryword
function letKeywordFun() {
    for (var i = 0; i < 5; i++) {
        document.write(i + '<br>');
    }
    document.write("Uses let keyword Outside the block" + i + '<br>'); // here with let keyword we can not use from the outside the block where variable declared
}
letKeywordFun();
