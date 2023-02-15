"use strict"

//Never EVER do this:
//totalGlobalVariable = "Never ever do this"; //creates an even more global variable than "var"
//var globalVariable = "Also never do this";

/*{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue); //prints "false" because it's a global variable
}*/

/*{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue); //prints "true" because "false" has another scope 
}*/

//Don't use var
/*for (var i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i); 
    }, 1000);
}*/

//Use let
for (let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i); 
    }, 1000);
}

let a; 
