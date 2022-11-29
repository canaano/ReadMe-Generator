// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(".utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
// name of readme file, title, description, installation, usage, contributions, test, license, list, github info, email
const questions = [
  {
    type: "input",
    message: "What do you want to name your Readme file?",
    name: "fileName",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What is the installation of your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is your projects usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the Contribution guidelines for your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the testing instructions for your project?",
    name: "testing",
  },
  {
    type: "list",
    message: "What licences are used for your project?",
    name: "license",
    choices: [
      {
        name: "MIT",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "ISC",
        value:
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      },
      {
        name: "Apache",
        value:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "Boost",
        value:
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      },
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
