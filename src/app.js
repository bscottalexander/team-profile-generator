const html = require("./internal/html");
const fs = require("fs");

const main = () => {
  const cards = [
    {
      name: "Brandon",
      email: "bs@gmail.com",
      id: 1,
      officeNumber: 120,
    },
  ];

  const title = "My Team";
  

  fs.writeFileSync("./output/index.html", html.createPageTemplate(html.createPageHeading(title), cards));
};

main();
