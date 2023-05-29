//require function to get  inquirer
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const fs = require ('fs');
const path= require("path");

// require function to get the shapes.js file from the assets /lib folder
const { Triangle, Square, Circle } = require('./Assets/lib/shapes');
function writeToFile(fileName, answers) {
   
    let svgString = "";
    // Sets width and height of logo container
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // wraps text within 
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.logoshape}`;
  
    // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
    let generateShape;
    if (answers.logoshape === "triangle") {
      generateShape = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.logocolor}"/>`;
    } else if (answers.logoshape === "square") {
      generateShape = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.logocolor}"/>`;
    } else {
      generateShape = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.logocolor}"/>`;
    }
  
    // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.fcolor}">${answers.letterinput}</text>`;
   
    svgString += "</g>";
    
    svgString += "</svg>";
  
  // let the user know ,if there is an error then show error or shows that the logo is generated   
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }
//function to prompt user with questions to generate logo 
function generateQandA(){
inquirer.prompt([{
    type: 'input',
    name: 'letterinput',
    message: 'Enter the characters that need to be printed ,only upto 3 characters allowed:',
}, {
    type: 'input',
    name: 'fcolor',
    message: 'Enter a font color keyword or a hexadecimal number:',
}, {
   type: 'list',
    name: 'logoshape',
    message: 'choose the shape of the logo:',
    choices: ['circle','triangle','square'],

},{
    type: 'input',
    name: 'logocolor',
    message: 'Enter a color keyword or a hexadecimal number for the shape:',
}
])
.then((answers) => {
    //chececking if the character length is greater than 3 if so , throw error
    if (answers.letterinput.length > 3) {
      console.log("Must enter a value of no more than 3 characters");
     generateQandA();
    } else {
        //if no error then generate svg logo
      writeToFile('logo.svg', answers);
    }
  });
}
  generateQandA();
 