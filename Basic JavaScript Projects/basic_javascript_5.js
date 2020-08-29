document.write(typeof 3);

console.log(2 + 2);

document.write(-3E310);

document.write("10" + 5);

document.write(18<2);

console.log(false);

document.write(10==10);

document.write(3==11);

x=82;
y="82";
document.write(x===y);

x=10;
y=10;
document.write(x===y);

a = "marcos";
b = "nav"
document.write(a===b);

document.write(5 > 2 && 10 > 4);

document.write(1>15 && 10>1);

document.write(5>10|| 10>4);

document.write(5>10 || 10>20);

function not_function() {
    document.getElementById("not").innerHTML = !(20>20); // on this part of code it is determining wheter or not something is true\\
}

function ride_function() { // on this code I am asking the hiegh of a person to determine wheter the person is tall enough\\
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height<52) ? "you are too short" : "you are tall enought";
    document.getElementById("ride").innerHTML = can_ride + "to ride.";
}