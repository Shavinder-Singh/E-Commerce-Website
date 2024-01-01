var ham_icon = document.querySelector(".ham_icon");
var header_lists_wrapper = document.querySelector(".header_lists_wrapper");
var close_icon_header = document.querySelector(".close_icon_header")
var submit_contact = document.querySelector(".contact_button_submit")
function open_ham() {
    ham_icon.addEventListener("click", function () {
        header_lists_wrapper.classList.add("active")
    });
}
open_ham()
function close_ham() {
    close_icon_header.addEventListener("click", function () {
        header_lists_wrapper.classList.remove("active")
    })
}
close_ham();


// Preloader-------------------------------------
let opacity = document.getElementById("opacity");
let hidden_opacity = document.querySelector(".hidden");
let preloader = document.getElementById("preloader");
function hidePreloader() {
    preloader.style.display = "none";

}
setTimeout(hidePreloader, 2000);