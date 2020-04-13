function addition_function() {
    var addition = 2 + 2;
    document.getElementById("math1").innerHTML = "2 + 2 =" + addition;
}

function subtraction_function() {
    var subtraction = 5 - 2;
    document.getElementById("math2").innerHTML = "5 - 2 =" + subtraction;
}

function multiplication() {
    var simple_math = 6 * 8;
    document.getElementById("math3").innerHTML ="6 x 8 =" + simple_math;
}

function division() {
    var simple_math = 48 / 6;
    document.getElementById("math4"). innerHTML = "48 / 6 =" + simple_math;
}

function more_math() {
    var simple_math = (1 + 2) * 10 / 2 -5;
    document.getElementById("math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_math;
}

function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("math6").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_operator() {
    var x = 10;
    document.getElementById("math7").innerHTML = -x;
}

{
var x = 5.25;
x--;
document.write(x)
}

    
window.alert(math.random() * 100)


function my_function() {
    document.getElementById("math8").innerHTML = Math.pow(4,3);
}