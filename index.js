// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const question = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title",
        
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "description",
        
    },
    {
        type: "checkbox",
        message: "What license are you using?",
        name: "license",
        choices: ['MIT', 'APACHE2.0', 'GPLv3', 'none'],
    },
    {
        type: "input",
        message: "how do you use your app?",
        name: "usage",
    },
    {
        type: "input",
        message: "any credits?",
        name: "instructions",
    },
    {
        type: "input",
        message: "Github username?",
        name: "git",
    },
    {
        type: "input",
        message: "Email?",
        name: "email",
    },
    {
        type: "input",
        message: "Please list any contributors?",
        name: "contributors",
    },
    {
        type: "input",
        message: "provide walkthorugh required test if applicable?",
        name: "test",
    },
];
 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFileSync(path.join(process.cwd(), fileName), data);
}
const data = "# README\n README content here";
const fileName = "README.md";

try {
    writeToFile(fileName, data);
    console.log("File written successfully.");
} catch (error) {
    console.error("Error writing file:", error);
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(question).then((response) => {
    console.log("creating a profressional README.md File");
    writeToFile("./dist.README.md", generateMarkdown({ ...response }));
});
}

// Function call to initialize app
init();