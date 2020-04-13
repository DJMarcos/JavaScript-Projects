function my_dictionary() {
    var animal = {
        species:"dog",
        color:"black",
        breed:"labrador",
        age:5,
        sound:"bark!"
    };
    delete animal.sound;
    document.getElementById("dictionary").innerHTML = animal.sound;
}