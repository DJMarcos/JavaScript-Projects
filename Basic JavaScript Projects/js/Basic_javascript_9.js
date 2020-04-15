function countdown() {
    var seconds = document.getElementById("seconds").nodeValue;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("time's up!");
    }
        }
    tick();
}

var slideindex = 1;
showslides(slideindex);

//next/previous controls
function plusslide(n) {
    showslides(slideindex += n);
}

//thumbnail image controls
function currentslide(n); {
    showslides(slideindex = n);
}

function showslides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideindex = 1}
    if (n < 1) {slideindex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classname = dots[i].classname.replace("active", "");
    }
    slides[slidesindex-1].getElementsByClassName.display = "block";
    dots[slideindex-1].classname += "active";
}
