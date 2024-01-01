// import { sproduct_button } from "./sproduct.js";
// export {addtocart}
// var cart_container = document.querySelector(".table_body_cart");
// sproduct_button.addEventListener("click", addtocart);
// console.log(sproduct_button);


// function addtocart(e) {
//     add_btn = e.target;
//     product_container = add_btn.closest(".prodetails_wrapper");
//     product_image = product_container.querySelector(".main_image").src;
//     product_title = product_container.querySelector(".product_title").innerHTML;
//     product_price = product_container.querySelector(".producr_price").innerHTML;
//     product_price = product_container.querySelector(".producr_price").innerHTML;
//     let cartItem = document.createElement("tr");
//     cartItem.innerHTML = `
//     <td><i class="fa-regular fa-circle-xmark"></i></td>
//     <td><img src=${product_image} alt="image" class="table_image_cart"></td>
//     <td class="product_description">${product_title}</td>
//     <td>${product_price}</td>
//     <td><input type="number" id="cart_number" value="1"></td>
//     <td>${product_price}</td>
//    `
//     cart_container.appendChild(cartItem);
// }