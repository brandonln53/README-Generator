const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/markdown");


    
    const questions = [
    {
      type: "input",
      message: "What is your Github username?",
      name: "github"
    },
    {
      type: "title",
      message: "What is the title of this development project?",
      name: "title"
    },
    {
      type: "input",
      message: "What is the name of the repository you are generating this README for?",
      name: "repository"
    },
    {
      type: "input",
      message: "Would you like to include a table of contents in your README file?",
      name: "table-of-contents"
    },
    {
      type: "input",
      message: "Please describe the installation process for your project.",
      name: "installation"
    },
    {
      type: "input",
      message: "Please provide a detailed user story for your development project; provide screenshots when applicable.",
      name: "usage"
    },
    {
      type: "input",
      message: "Were there collaborators on your project? Please list them here.",
      name: "credits"
    },
    {
      type: "input",
      message: "Do you have a badge for your README file?",
      name: "badge"
    },
    {
      type: "input",
      message: "If you'd like other developers to contribute to this project moving forward, please include guidelines here on how to do so.",
      name: "contributing"
    },
    {
      type: "input",
      message: "Are there any tests run on this development project that you'd like to include in this document? List them here.",
      name: "tests"
    },
    {
      type: "list",
      message: "Are there any licensed areas of your project? Please describe what other developers can and cannot do.",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPLv3", "BSD", "none"]
    },
    {
      type: "input",
      message: "Please provide your GitHub profile picture.",
      name: "questions"
    },
    {
      type: "input",
      message: "Provide your GitHub email here.",
      name: "email"
    }

  ];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }))
    });
}

init();