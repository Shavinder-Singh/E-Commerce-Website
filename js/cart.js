// Coupon Code-------------------------------------------
let input_coupon = document.getElementById("coupon_input")
let apply_btn = document.querySelector(".apply_cart");
function info_coupon() {
    function closealert() {
        alert("Please Enter Your Phone No. To avail Facility of Discount ")
        input_coupon.removeEventListener("click", closealert)
    }
    input_coupon.addEventListener("click", closealert)
}
info_coupon();

function apply_btns() {
    apply_btn.addEventListener("click", function () {
        var input_coupons = input_coupon.value;
        var nonDigit = /\D/;
        console.log(input_coupons.length);

        if (input_coupons.trim() === "") {
            alert("Please Fill Details");
        } else if (nonDigit.test(input_coupons)) {
            alert("Don't Enter Alphabets");
            input_coupon.value = ""
            return;
        } else if (input_coupons.length >= 11) {
            alert("Number is greater than 10");
        }
        else if (input_coupons.length <= 9) {
            alert("It is Not A Valid Number");
        }
        else {
            coupon_wrapper.style.display = "flex"
        }
    });
}

apply_btns();
let coupon_wrapper = document.querySelector(".coupon_wrapper");
let close_icon_coupon = document.querySelector(".close_icon_cart_coupon");
function coupon_close() {
    close_icon_coupon.addEventListener("click", function () {
        coupon_wrapper.style.display = "none"
    })
}
coupon_close();






// export function addtocart(e) {
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