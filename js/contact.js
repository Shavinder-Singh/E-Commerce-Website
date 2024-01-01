// Contact page submit form greetings
var subject_contact_page = document.querySelector(".subject_contact_page").value;
var textarea_contact = document.querySelector(".textarea_contact").value;


function greet() {
    let name_contact_page = document.querySelector(".name_contact_page");
    let email_contact_page = document.querySelector(".email_contact_page");

    var nameinput = name_contact_page.value;
    let emailRegex = /^[A-Za-z\.0-9]*@[a-z]*\.[a-z]{2,4}$/;
    // shavindersingh.shubh@gmail.com
    let nonDigit = /\d/;
    if (nonDigit.test(nameinput)) {
        alert("Not Enter Nmuber");
        name_contact_page.value = "";
    }
    else if (nameinput === "") {
        alert("Please Fill Details First");
    }
    else if (email_contact_page.value === "") {
        alert(" please fill email");
    }
    else if (!emailRegex.test(email_contact_page.value)) {
        alert("email is not corrected");
    }
    else {
        alert("Thanks For Giving Suggestion.We appreciate Your Suggestions");
    }
}
