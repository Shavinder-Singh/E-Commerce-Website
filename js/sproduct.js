// import {addtocart} from './cart'
// var sproduct_button=document.querySelector(".sproduct_button");
// sproduct_button.addEventListener("click", addtocart);
// console.log(addtocart)

// import { addtocart } from "./main";






// g
var main_img = document.querySelector(".main_image");
var small_images = document.getElementsByClassName("small_image");

for (let i = 0; i < small_images.length; i++) {
    small_images[i].addEventListener("click", function () {
        main_img.src = this.src;
    })
}

// Cart Selection
var sizeselect = document.getElementById("sizeSelect");
var sproduct_button = document.querySelector(".sproduct_button")
sproduct_button.addEventListener("click", function () {
    const selectSize = sizeselect.value;
    console.log(selectSize)
    if (selectSize === "Select Size") {
        alert("Please Choose Size")
    }
    else {
        alert("Check Your Cart Now , You Choose Size of"+ selectSize)
    }
})


