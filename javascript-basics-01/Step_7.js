var shoeSize = prompt("Please enter your shoeSize: ");
var birthYear =prompt ("Please enter your birth year: ");

function result(shoeSize, birthYear){
    var result = ((((shoeSize * 2) + 5) * 50) - birthYear) + 1766 ;
    return result;
}

alert (result(shoeSize, birthYear));