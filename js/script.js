/*
Description: Createa a typing animation based on the text parameter on the area of id 

args: id, text 
params: none
*/

var i = 0;

function typing(id, text) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typing(id, text), 100);
    }
}

function myFunction() {
    var x = document.getElementsByClassName("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }