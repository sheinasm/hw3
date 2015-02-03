var iceCream = ["Strawberry", "Vanilla", "Cookies and Cream"];
iceCream.push("Cookie Dough");  

var President1 = {
firstName: "Barak",
lastName: "Obama",
termLength: 2,
party: "Democrat",
years: 8,
}

var President2 = {
firstName: "George W.",
lastName: "Bush",
termLength: 2,
party: "Republican",
years: 8,
}

var President3 = {
firstName: "Bill",
lastName:"Clinton",
termLength:2,
party:"Democrat",
years:8, 
}

var President4 = {
firstName: "George H.",
lastName:"Bush",
termLength:2,
party:"Republican",
years:8,
}

var President5 = {
firstName: "Ronald",
lastName:"Reagon",
termLength:2,
party:"Republican",
years:8,
}

var Presidents = [President1, President2, President3, President4, President5];

console.log (President3.firstName, President3.lastName);


function howdy() {
    console.log("Sheina Mompremier says hi!");
}

howdy();

var numba = function( string ) {
    if (string.length < 7) {
        console.log( "What a short little word!" );
    } else if (string.length > 7) {
        console.log( "I'm sorry, but that’s too many to count." );
    } else {
        console.log( "7, what a perfect choice!" );
    }
}

numba( "7" );
numba( "seventy" );
numba( "university" );

function inception( callback, value ) {
    callback( value );
}
