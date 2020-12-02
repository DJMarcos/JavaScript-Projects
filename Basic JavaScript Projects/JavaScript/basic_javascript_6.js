function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height<52) ? "you are too short" : "you are tall enought";
    document.getElementById("ride").innerHTML = can_ride + "to ride.";
}


function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var jack = new vehicle("dodge", "viper", 2020,"red");
var emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
var erik = new vehicle("ford", "pinto", 1971, "mustard");
function myfunction() {
    document.getElementById("keywords_and_constructors").innerHTML ="erik drives a " + erik.vehicle_color + "colored" + erik.vehicle_model + " manufactured in " + erik.vehicle_year;
}

function count_function() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}

var x = 10;
function add_numbers_1() {
    document.write(20 + x + "<br>");
}
function add_numbers_2() {
    document.write(x + 100)
}
add_numbers_1()
add_numbers_2()