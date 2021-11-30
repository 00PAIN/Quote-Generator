
 // the Array  which is going to handle the qotes 

var Quotes  = [];

Quotes [0] = "All limitations are self-imposed.<br> – Oliver Wendell Holmes";

Quotes [1] = "Tough times never last but tough people do.<br> – Robert H. Schiuller";

Quotes [2 ] =" Problems are not stop signs, they are guidelines.<br> – Robert H. Schiuller";

Quotes [3] =" One day the people that don’t even believe in you will tell everyone how they met you.<br> – Johnny Depp";

Quotes [4] =" If I’m gonna tell a real story, I’m gonna start with my name.<br> – Kendrick Lamar";

Quotes [5] =" If you tell the truth you don’t have to remember anything.<br> – Mark Twain";

Quotes [6] =" Have enough courage to start and enough heart to finish.<br> – Jessica N. S. Yourko";

Quotes [7] =" Hate comes from intimidation, love comes from appreciation.<br> – Tyga ";

Quotes [8] =" I could agree with you but then we will both be wrong.<br> – Harvey Specter ";

Quotes [9] =" Oh, the things you can find, if you don’t stay behind.<br> – Dr. Seuss";

// end of Array declaration

// function which will handle the random generation of the qoutes and feeds it to the html

function  newQuote() {
    var randomNumber = Math.floor(Math.random() * (Quotes.length));

//targeting the html element with id="qouteDisaplay

    document.getElementById('Display').innerHTML = Quotes[randomNumber];
}
