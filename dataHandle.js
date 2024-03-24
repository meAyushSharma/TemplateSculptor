function portfolioData(jsonDataPortfolio) {
  const HTMLToSend = `<body>
    <header>
        <nav id="navbar">
            <ul>
                <li><a href="#about">${jsonDataPortfolio.aboutNav}</a></li>
                <li><a href="#services">${jsonDataPortfolio.servicesNav}</a></li>
                <li><a href="#contact">${jsonDataPortfolio.contactNav}</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="about">
            <h2>${jsonDataPortfolio.aboutHead}</h2>
            <p>${jsonDataPortfolio.aboutText}</p>
        </section>
        <section id="services">
            <h2>${jsonDataPortfolio.servicesHead}</h2>
            <p>${jsonDataPortfolio.servicesText}</p>
        </section>
        <section id="contact">
            <h2>${jsonDataPortfolio.contactHead}</h2>
            <p>${jsonDataPortfolio.contactText}</p>
        </section>
    </main>
    <footer>
        <p>${jsonDataPortfolio.footerText}</p>
    </footer>
</body>`;
  const CSSToSend = `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
}

header nav ul {
    list-style-type: none;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin-right: 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
`;
  return { htmlkey: HTMLToSend, csskey: CSSToSend };
}

// here starts another

function businessData(jsonData) {
  const HTMLToSendBusiness = `<header>
    <nav>
        <ul>
            <li><a href="#home" contenteditable="true" id="1">${jsonData.one}</a></li>
            <li><a href="#products-services" contenteditable="true" id="2">${jsonData.two}</a></li>
            <li><a href="#contact" contenteditable="true" id="3">${jsonData.three}</a></li>
        </ul>
    </nav>
</header>

<section id="home" class="hero">
    <img src="path/to/image.png" alt="Hero Image" id="image-to-change" />
    <div class="hero-text">
        <h1 style="text-decoration: underline;" contenteditable="true" id="4">${jsonData.four}</h1>
        <p contenteditable="true" id="5">
            ${jsonData.five}
        </p>
        <h1 contenteditable="true" id="6">${jsonData.six}</h1>
        <p>
        <ul style="list-style-type:disc;">
            <li>
                <h2 contenteditable="true" id="7">${jsonData.seven}</h2>
                <p contenteditable="true" id="8">${jsonData.eight}</p>
            </li>
            <li>
                <h2 contenteditable="true" id="9">${jsonData.nine}</h2>
                <p contenteditable="true" id="10">${jsonData.ten}</p>
            </li>
            <li>
                <h2 contenteditable="true" id="11">${jsonData.eleven}</h2>
                <p contenteditable="true" id="12">${jsonData.twelve}</p>
            </li>
        </ul>
        </p>
    </div>
</section>

<section id="products-services" class="products-services">
    <h2 contenteditable="true" id="13">${jsonData.thirteen}</h2>
    <div class="product-list">
        <div class="product-item">
            <h3 contenteditable="true" id="14">${jsonData.fourteen}</h3>
            <p contenteditable="true" id="15">${jsonData.fifteen}</p>
        </div>
        <div class="product-item">
            <h3 contenteditable="true" id="16">${jsonData.sixteen}</h3>
            <p contenteditable="true" id="17">${jsonData.seventeen}</p>
        </div>
    </div>
</section>

<section id="contact" class="contact">
    <h2 contenteditable="true" id="18">${jsonData.eighteen}</h2>
    <div class="contact-info">
        <ul style="list-style: none; list-style-type: none">
            <li>
                <a href="www.google.com" style="
              color: #333333da;
              text-decoration: none;
              text-decoration: underline;
            " contenteditable="true" id="19">${jsonData.nineteen}</a>
            </li>
            <li>
                <a href="https://twitter.com/home" style="
              color: #333333da;
              text-decoration: none;
              text-decoration: underline;
            " contenteditable="true" id="20">${jsonData.twenty}</a>
            </li>
        </ul>
    </div>
</section>

<footer>
    <p contenteditable="true" id="30">${jsonData.twentyone}</p>
</footer>
`;
  const CSSToSendBusiness = `body,
html {
  margin: 0;
  padding: 0;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: #e9ecef;
}

header {
  background: #343a40;
  color: #dee2e6;
  padding: 10px 0;
  font-size: 1.1rem;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

nav ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  color: rgba(255, 255, 255, 0.934);
  text-decoration: none;
}

.hero {
  margin-top: 10vh;
  position: relative;
  text-align: center;
  color: rgba(255, 255, 255, 0.934);
}

.hero img {
  width: 100%;
  height: 110vh;
  overflow-x: hidden;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.308);
  padding: 20px;
  width: 80%;
  border-radius: 20px 20px 20px 20px;
}

.hero-text h1 {
  font-size: 1.8rem;
  margin: 0.5rem;
}
.hero-text p,
h2 {
  font-size: 1.3rem;
  margin: 0.5rem;
}

.products-services {
  padding: 20px;
  text-align: center;
}

.products-services h2 {
  font-size: 1.7rem;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.product-item {
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: calc(50% - 40px);
  background-color: #2525253a;
  border-radius: 20px 20px 20px 20px;
}

.contact {
  display: block;
  text-align: center;
  padding: 10px;
}

.contact-info ul li:hover {
  color: #2b2c2d;
}

footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  width: 100%;
}
`;
  return {
    htmlkeybusiness: HTMLToSendBusiness,
    csskeybusiness: CSSToSendBusiness,
  };
}


module.exports = {
  portfolioData: portfolioData,
  businessData: businessData,
};
