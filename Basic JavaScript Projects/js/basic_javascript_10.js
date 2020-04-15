function call_loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}

function method() {
    var str = "yooo, wass good!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Instruments = ["guitar", "drums", "piano", "base", "violin", "trumpet", "flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("list_of_Instruments").innerHTML = Content;
}

function array_function() {
    var array_function = 1
    array_function[0] = "sleeping";
    array_function[1] = "eating";
    array_function[2] = "testing";
    array_function[3] = "ooops";
    document.getElementById("array").innerHTML = "lets see if this works " + array_function[1] + ".";
}

function constant_function() {
    const Musical_Instrument = {type: "guitar", brand: "fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "the cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


function something_function() {
    return "yooo" + name;
}
document.getElementById("idk").innerHTML =
something_function("marcos");



let car = {
    make: "Dodge ",
    model: "viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "the car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();




var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    text += "the number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;