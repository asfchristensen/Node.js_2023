"use strict" //Some use Linter programme today

//Never EVER do this
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


//Da "i" er global peger dette "i" på det globale "i" der efter 1000 millisekunder 
//--allerede er incrementet med 6 - den printer "6" 5 gange
/*for (var i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i); 
    }, 1000);
}*/

//Derfor skal man bruge "let" og ikke "var"
for (let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i); 
    }, 1000);
}

let a; 
