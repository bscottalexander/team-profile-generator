const handlebars = require("handlebars");

const headingTemplate = handlebars.compile(`
<div style="height: 100px; width: 100%; background-color: red; color: #FFFFFF; display: flex; justify-content: center; align-items: center; font-size: 24px;">
    <span>{{title}}</span>
<div>
`);

const cardTemplate = handlebars.compile(`
<div style="border: 1px solid black; width:250px; box-shadow: 5px 8px 10px; margin: 10px;">
    <span style="display: flex; justify-content: center; padding-top: 20px; font-size: 24px; padding-bottom: 40px; background-color: #1E90FF">{{name}}</span>
    <div style="background-color: #DCDCDC; padding: 10px; padding-bottom: 40px; padding-top: 100px;">
        <div style="border: 1px solid black; padding: 5px; background-color: white;">
            <span>ID: {{id}}</span>
        </div>
        <div style="border: 1px solid black; padding: 5px; background-color:white;">
            <span>Email: {{email}}</span>
        </div>
        <div style="border: 1px solid black; padding: 5px; background-color:white;" QA>
            <span>Office number: {{officeNumber}}</span>
        </div>
    </div>
</div>
`);

const cardContainerTemplate = handlebars.compile(`
<div style="display: flex; flex-wrap: wrap;">
    {{cards}}
</div>
`);

const createPageTemplate = handlebars.compile(`
<!DOCTYPE html>
<html>
    <head>
        <title>Employee Profiles</title>
    </head>
    <body>
        {{heading}}
        {{cards}}
    </body>
</html>
`)

exports.cardContainerTemplate = cardContainerTemplate;
exports.headingTemplate = headingTemplate;
exports.cardTemplate = cardTemplate;
exports.createPageTemplate = createPageTemplate;
