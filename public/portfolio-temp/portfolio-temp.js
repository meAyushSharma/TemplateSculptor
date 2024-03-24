function funToSendData() {
  const aboutText = document.getElementById("about-text").innerText;
  const servicesText = document.getElementById("services-text").innerText;
  const contactText = document.getElementById("contact-text").innerText;
  const aboutHead = document.getElementById("about-heading").innerText;
  const servicesHead = document.getElementById("services-heading").innerText;
  const contactHead = document.getElementById("contact-heading").innerText;
  const aboutNav = document.getElementById("about-nav").innerText;
  const servicesNav = document.getElementById("services-nav").innerText;
  const contactNav = document.getElementById("contact-nav").innerText;
  const footerText = document.getElementById("footer-text").innerText;

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
      let isIt = response.json();
      return isIt;
    })
    .then((data) => {
      document.getElementById("html-section").textContent = data.htmlportfolio;
      document.getElementById("css-section").textContent = data.cssportfolio;
    })
    .catch((err) => {
      console.log("error: ", err);
    });
}
