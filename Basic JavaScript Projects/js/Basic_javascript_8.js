function full_sentence() {
    var part_1 = "I have";
    var part_2 = " to go";
    var part_3 = " outside";
    var part_4 = " to peee lol";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}


function slice_method() {
    var sentence = "I wonder what I should make this about lmao.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}

function some_thing() {
    var str = "yoooo yooo";
    var res = str.toUpperCase();
    document.getElementById("uuper").innerHTML = res;
}

function search_method() {
    var str = "visit youtube!"
    var n = str.search("youtube");
    document.getElementById("search").innerHTML = n;
}

function string_method() {
    var x = 182;
    document.getElementById("numbers_to_string").innerHTML = x.toString()
}

function precision_method() {
    var x = 12938.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}function value_method() {
    var str = "yooo wass up!";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}


