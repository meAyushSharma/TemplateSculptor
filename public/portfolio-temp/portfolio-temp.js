// var editable = document.querySelectorAll(".preview-nav .to-edit");

// // ctrl+mouseover ==> not editable [changed]
// // contenteditable otherwise

// window.addEventListener("keydown", function (event) {
//   if (event.code === "ControlRight" || event.code === "ControlLeft") {
//     editable.forEach((ele) => {
//       ele.addEventListener("mouseover", function () {
//         ele.setAttribute("contenteditable", "false");
//       });
//     });
//   }
// });
// window.addEventListener("keyup", function (event) {
//   if (event.code === "ControlRight" || event.code === "ControlLeft") {
//     editable.forEach((ele) => {
//       ele.addEventListener("mouseover", function () {
//         ele.setAttribute("contenteditable", "true");
//         ele.setAttribute("style", "background-color: #47126ba1");
//       });
//     });
//   }
// });

function funToSendData() {
  const aboutText = document.getElementById("about-text").innerText;
  // console.log(aboutText);
  const servicesText = document.getElementById("services-text").innerText;
  // console.log(servicesText);
  const contactText = document.getElementById("contact-text").innerText;
  // console.log(contactText);
  const aboutHead = document.getElementById("about-heading").innerText;
  // console.log(aboutHead);
  const servicesHead = document.getElementById("services-heading").innerText;
  // console.log(servicesHead);
  const contactHead = document.getElementById("contact-heading").innerText;
  // console.log(contactHead);
  const aboutNav = document.getElementById("about-nav").innerText;
  // console.log(aboutNav);
  const servicesNav = document.getElementById("services-nav").innerText;
  // console.log(servicesNav);
  const contactNav = document.getElementById("contact-nav").innerText;
  // console.log(contactNav);
  const footerText = document.getElementById("footer-text").innerText;
  // console.log(footerText);

  fetch("/portfolio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      aboutText: aboutText,
      aboutNav: aboutNav,
      aboutHead: aboutHead,
      contactHead: contactHead,
      contactNav: contactNav,
      contactText: contactText,
      servicesHead: servicesHead,
      servicesNav: servicesNav,
      servicesText: servicesText,
      footerText: footerText,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("html-section").textContent = data.html;
      document.getElementById("css-section").textContent = data.css;
    })
    .catch((err) => {
      console.log("error: ", err);
    });
}
// console.log("hello before:::: ");
// var mainHeading = document.getElementById("main-heading");
// var fontFamilyList = [
//   '"Poppins", sans-serif',
//   '"Kaushan Script", cursive',
//   '"Dancing Script", cursive',
//   '"Playfair Display", serif',
//   '"Roboto", sans-serif',
// ];

// function recurringFont() {
//   mainHeading.style.fontFamily = fontFamilyList[Math.floor(Math.random() * 5)];
// }
// window.onload = function () {
//   setInterval(recurringFont, 1200);
// };
