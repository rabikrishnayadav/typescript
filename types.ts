console.log("welcome to learn typscript");

let message; // here is only declare the variable not its type
message = "Assertion with angle-bracket";
(<string>message).length;  // assertion with angle-bracket

let msg; // here is only declare the variable not its type
msg = "Assertion use as a syntax";
(msg as string).length; // assertion with syntax
