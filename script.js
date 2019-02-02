/*
Description:

args: id, text 
params: none
*/
var i = 0;

function typing(id, text) {
    console.log(text);
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typing("welcomeText", "Welcome to WiCS"), 100);
    }
}

$(document).ready( () => {
    typing("welcomeText", "Welcome to WiCS");
});

$(document).ready( () => {
    setTimeout( function() { $( "#welcomeText" ).fadeOut() }, 10000);
});

$(document).ready( () => {
    $(".navBar").css("opacity", 0);
    setTimeout( () => {
        $(".navBar").animate( { opacity: 1 }, 700);
    }, 10000);
});

$(document).ready( () => {
    $("#socialMediaLinks").css("opacity", 0);
    setTimeout( () => {
        $("#socialMediaLinks").animate( { opacity: 1 }, 700);
    }, 10000);
});