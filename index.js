const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
    return inquirer.createPromptModule([
    {
        type: 'input',
      name: 'projName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'projDesc',
      message: 'Provide a description of your project',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide installation instructions for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions on how to use your project',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Select the type of project license you wish to use',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Provide details of any contributions and credits for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide details of any test conditions used to develop this project.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Provide your Github username so users can contact you if they have additional questions',
      },
    ]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
