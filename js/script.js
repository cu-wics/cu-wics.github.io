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

function openNavigation() {
    document.getElementById("myTopnav").style.width = "100%";
}

function closeNavigation() {
    document.getElementById("myTopnav").style.width = "0";
}