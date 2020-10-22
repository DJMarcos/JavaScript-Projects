function Color_function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "red":
            Color_Output = "red" + Color_string;
        break;
        case "yellow":
            Color_Output = "yellow" + Color_String;
        break;
        case "green":
            Color_Output = "green" + Color_String;
        break;
        case "blue":
            Color_Output = "blue" + Color_string;
        break;
        case "pink":
            Color_Output = "pink" + Color_String;
        break;
        case "purple":
            Color_Output = "purple" + Color_String;
        break;
        default:
        Color_Output = "please enter a color exactly as wriiten on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output
}

function wass_up_function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "the text has changed";
}


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
