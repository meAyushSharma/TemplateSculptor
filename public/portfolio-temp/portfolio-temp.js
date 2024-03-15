var editable = document.querySelectorAll(".preview-nav .to-edit");

// ctrl+mouseover ==> not editable [changed]
// contenteditable otherwise

window.addEventListener("keydown", function (event) {
  if (event.code === "ControlRight" || event.code === "ControlLeft") {
    editable.forEach((ele) => {
      ele.addEventListener("mouseover", function () {
        ele.setAttribute("contenteditable", "false");
      });
    });
  }
});
window.addEventListener("keyup", function (event) {
  if (event.code === "ControlRight" || event.code === "ControlLeft") {
    editable.forEach((ele) => {
      ele.addEventListener("mouseover", function () {
        ele.setAttribute("contenteditable", "true");
        ele.setAttribute("style", "background-color: #47126ba1");
      });
    });
  }
});
var mainHeading = document.getElementById("main-heading");
var fontFamilyList = [
  '"Poppins", sans-serif',
  '"Kaushan Script", cursive',
  '"Dancing Script", cursive',
  '"Playfair Display", serif',
  '"Roboto", sans-serif',
];

function recurringFont() {
  mainHeading.style.fontFamily = fontFamilyList[Math.floor(Math.random() * 5)];
}
window.onload(setInterval(recurringFont, 1200));
