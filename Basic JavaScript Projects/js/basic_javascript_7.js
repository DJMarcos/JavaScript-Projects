var x = 10;
function add_numbers_1() {
    document.write(20 + x + "<br>");
}
function add_numbers_2() {
    document.write(x + 100)
}
add_numbers_1()
add_numbers_2()

function add_numbers_3() {
    var x = 15;
    console.log(15 + x);
}
function add_numbers_4() {
    console.log(x + 100);
}
add_numbers_3();
add_numbers_4();

function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "how are you today?";
    }
}

function age_function() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        vote = "you are old enough!";
    }
    else {
        vote = "you are not old enough to vote!";
    }
    document.getElementById("how_old_are_you?").innerHTML = vote;
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if(time < 12 == time > 0) {
        reply = "it is morning yooo!";
    }
    else if (time > 12 == time < 18) {
        reply = "its the afternoon, wake upp!";
    }
    else {
        reply = "its the evening brah";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}