function openFrame1() {
    document.getElementById("Overlay1").style.display = "block";
}

function closeFrame1() {
    document.getElementById("Overlay1").style.display = "none";
}
function openSearch1() {
    document.getElementById("Overlay3").style.display = "block";
    document.getElementById("Overlay2").style.display = "block";
}

function closeSearch1() {
    document.getElementById("Overlay3").style.display = "none";
    document.getElementById("Overlay2").style.display = "none";
}
function closeForms() {
    document.getElementById("Lay").style.display = "none";
}

function openForms() {
    document.getElementById("Lay").style.display = "block";
}

function openHelp() {
    document.getElementById("Typehelp").style.display = "block";
}
function closeHelp() {
    document.getElementById("Typehelp").style.display = "none";
}
function getValue() {
    var isChecked = document.getElementById("ur_or_fiz").checked;

    if (isChecked) {
        document.getElementById("ur_osoba").style.display = "none";
        document.getElementById("fiz_osoba").style.display = "block";
        console.log("Input is checked");
    } else {
        document.getElementById("ur_osoba").style.display = "block";
        document.getElementById("fiz_osoba").style.display = "none";
        console.log("Input is NOT checked");
    }
}

