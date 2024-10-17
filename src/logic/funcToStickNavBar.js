window.onscroll = function() {
    stickNavBar();
};

var navbar = document.querySelector('.navBarWrapper');
var header = document.querySelector('.headerWithImg');
var sticky = header.offsetHeight; // The height after which the navbar should stick

function stickNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
    } else {
        navbar.style.position = "relative"; // Reverts back to normal position
        navbar.style.top = "initial";
    }
}