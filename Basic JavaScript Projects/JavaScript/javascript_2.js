function validateForm() {
    var X = document.forms["my form"]["fmane"].value;
    if (X =="") {
        alert("Name must be filled out");
        return false;
    }
}