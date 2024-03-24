function funToSendDataBusiness() {
  const one = document.getElementById("1").innerText;
  const two = document.getElementById("2").innerText;
  const three = document.getElementById("3").innerText;
  const four = document.getElementById("4").innerText;
  const five = document.getElementById("5").innerText;
  const six = document.getElementById("6").innerText;
  const seven = document.getElementById("7").innerText;
  const eight = document.getElementById("8").innerText;
  const nine = document.getElementById("9").innerText;
  const ten = document.getElementById("10").innerText;
  const eleven = document.getElementById("11").innerText;
  const twelve = document.getElementById("12").innerText;
  const thirteen = document.getElementById("13").innerText;
  const fourteen = document.getElementById("14").innerText;
  const fifteen = document.getElementById("15").innerText;
  const sixteen = document.getElementById("16").innerText;
  const seventeen = document.getElementById("17").innerText;
  const eighteen = document.getElementById("18").innerText;
  const nineteen = document.getElementById("19").innerText;
  const twenty = document.getElementById("20").innerText;
  const twentyone = document.getElementById("21").innerText;

  fetch("/business", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      one: one,
      two: two,
      three: three,
      four: four,
      five: five,
      six: six,
      seven: seven,
      eight: eight,
      nine: nine,
      ten: ten,
      eleven: eleven,
      twelve: twelve,
      thirteen: thirteen,
      fourteen: fourteen,
      fifteen: fifteen,
      sixteen: sixteen,
      seventeen: seventeen,
      eighteen: eighteen,
      nineteen: nineteen,
      twenty: twenty,
      twentyone: twentyone,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("html-section").textContent = data.htmlbusiness;
      document.getElementById("css-section").textContent = data.cssbusiness;
    })
    .catch((err) => {
      console.log("error: ", err);
    });
}
