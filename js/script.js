/*
Description: Createa a typing animation based on the text parameter on the area of id 

args: id, text 
params: none
*/

const typing = (function(id, text, i = 0) {
  return (function() {
      if (i < text.length) {
          // console.log(text.charAt(i));
          document.getElementById(id).innerHTML += text.charAt(i);
          setTimeout(() => typing(id, text, ++i), 80);
      }
  })();
})


function openNavigation() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNavigation() {
  document.getElementById("mySidenav").style.width = "0";
}