/*
Description: Createa a typing animation based on the text parameter on the area of id 

args: id, text 
params: none
*/

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

function respNavigationBar() {
    var navLinks = document.getElementById("myTopnav");
    if (navLinks.className === "topnav") {
      navLinks.className += " responsive";
      document.getElementById("topnav responsive").style.height=window.innerHeight;
    } else {
      navLinks.className = "topnav";
    }
  }