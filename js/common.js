// Get the button
// let mybutton = document.getElementById("OnTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('OnTopBtn').style.display = "block";
    document.getElementById('navBar').style.padding="0rem 2rem";
    
  } else {
    document.getElementById('OnTopBtn').style.display = "none";
    document.getElementById('navBar').style.padding="1rem 2rem";
    document.getElementById('navBar').style.transition="transition: padding 1s";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}