// document.getElementById("about").addEventListener("click", function () {
//   // let response = await fetch("/about");
//   // if (!response.ok) {
//   //   throw new Error("Network response was not ok");
//   // }
//   // let textedResponse = await response.text();
//   // document.getElementById("forChildAppend").innerHTML = textedResponse;
//   // console.log(response);
//   // console.log(textedResponse);

//   // fetch("/about").catch((e) => {
//   //   console.error("thers an error", e);
//   // });
// });
document.getElementById("templates").addEventListener("mouseover", function () {
  document.getElementById("demo").innerHTML = "this is from templates: <br/>";
});
document.getElementById("something").addEventListener("mouseout", function () {
  document.getElementById("demo").innerHTML = "this is from something: <br/>";
});
