/*
Description: Createa a typing animation based on the text parameter on the area of id 

args: id, text 
params: none
*/

function openNavigation() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNavigation() {
    document.getElementById("mySidenav").style.width = "0";
}

var i = 0;


function typing(id, text) {
    console.log(text);
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typing(id, text), 100);
    }
}


$(document).ready( () => {
    typing("welcomeText", "Welcome to WiCS");
});

$(document).ready( () => {
    setTimeout( function() { $( "#welcomeText" ).fadeOut() }, 10000);
});


$(document).ready( () => {
    setTimeout( function() { location.replace("pages/about.html") }, 10000);
});