const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")
const filePath = "./output/README.md"

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address",
        name: "email",
    },
    {
        type: "input",
        message: "What is your project's name",
        name: "projectName",
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "desc",
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "repoUse",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "repoContribute",
    },
];

// TODO: Create a function to write README file
function writeToFile(filelocation, data) {
    fs.writeFile(filelocation, data, (err) => err ? console.log(err) : console.log("README.md had been generated"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
            const readme = generateMarkdown(answers)
            writeToFile(filePath, readme)
        })
}

// Function call to initialize app
init();
