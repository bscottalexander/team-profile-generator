const templates = require('./templates');

const createPageHeading = (title) => {
    return templates.headingTemplate({title});
};

const createCard = (name, email, id, officeNumber) => {
    return templates.cardTemplate({name, email, id, officeNumber})
}

const createCards = (cards) => {
    const cardsString = cards.map((card) => {
        return templates.cardTemplate({name: card.name, email: card.email, id: card.id, officeNumber: card.officeNumber})
    }).join("\\n");
    return templates.cardContainerTemplate({cards: cardsString});
}

const createPageTemplate = (heading, cards) => {
    return templates.createPageTemplate({heading, cards})
}



exports.createCards = createCards;
exports.createPageHeading = createPageHeading;
exports.createCard = createCard;
exports.createPageTemplate = createPageTemplate;