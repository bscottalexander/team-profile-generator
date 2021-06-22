const html = require("./html");
const templates = require("./templates");

test("create page heading returns proper response", () => {
  expect(html.createPageHeading("My Team")).toBe(
    templates.headingTemplate({ title: "My Team" })
  );
});

test("create card returns proper response", () => {
  expect(html.createCard("Brandon", "bs@gmail.com", 1, 120)).toBe(
    templates.cardTemplate({
      name: "Brandon",
      email: "bs@gmail.com",
      id: 1,
      officeNumber: 120,
    })
  );
});

test("create cards returns proper response", () => {
  const cards = [
    {
      name: "Brandon",
      email: "bs@gmail.com",
      id: 1,
      officeNumber: 120,
    },
  ];
  const cardStr = cards.map((card) => templates.cardTemplate(card)).join("\\n");

  expect(html.createCards(cards)).toBe(
    templates.cardContainerTemplate({ cards: cardStr })
  );
});

test("create page returns proper response", () => {
  const title = "My Team";
  const cards = [
    {
      name: "Brandon",
      email: "bs@gmail.com",
      id: 1,
      officeNumber: 120,
    },
  ];

  const cardStr = cards.map((card) => templates.cardTemplate(card)).join("\\n");

  expect(
    html.createPageTemplate(
      html.createPageHeading(title),
      html.createCards(cards)
    )
  ).toBe(
    templates.createPageTemplate({
      cards: templates.cardContainerTemplate({ cards: cardStr }),
      heading: templates.headingTemplate({title}),
    })
  );
});
