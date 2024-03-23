function portfolioData(jsonData) {
  const HTMLToSend = `<body>
    <header>
        <nav id="navbar">
            <ul>
                <li><a href="#about">${jsonData.aboutNav}</a></li>
                <li><a href="#services">${jsonData.servicesNav}</a></li>
                <li><a href="#contact">${jsonData.contactNav}</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="about">
            <h2>${jsonData.aboutHead}</h2>
            <p>${jsonData.aboutText}</p>
        </section>
        <section id="services">
            <h2>${jsonData.servicesHead}</h2>
            <p>${jsonData.servicesText}</p>
        </section>
        <section id="contact">
            <h2>${jsonData.contactHead}</h2>
            <p>${jsonData.contactText}</p>
        </section>
    </main>
    <footer>
        <p>${jsonData.footerText}</p>
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

module.exports = portfolioData;
