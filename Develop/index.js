// npm init

// includes inquirer package
const inquirer = require("inquirer");
// includes fs package
const fs = require("fs");
// includes the generateMarkdown function from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions
const questions = [
  {
    //badge
    type: "input",
    name: "badge",
    message: "Enter a BADGE:",
  },
  {
    // * Project title
    type: "input",
    name: "title",
    message: "Enter your PROJECT TITLE:",
  },
  {
    // * Description
    type: "input",
    name: "description",
    message: "Enter a DESCRIPTION of your project:",
  },
  // {
  //   // * Table of Contents:
  //   type: "checkbox",
  //   name: "contents",
  //   message: "Choose your TABLE OF CONTENTS:",
  //   choices: [1, 2, 3, 4]
  // },
  {
    // * Installation: string
    type: "input",
    name: "install",
    message: "Enter INSTALLATION instructions:",
  },
  {
    // * Usage: string
    type: "input",
    name: "usage",
    message: "Enter USAGE instructions:",
  },
  {
    // * License: string
    type: "list",
    name: "license",
    message: "Enter LICENSE information:",
    choices: ["BSD", "MIT", "GPL","Other", "No License"],
  },
  {
    // * Contributing: array
    type: "input",
    name: "contributors",
    message: "Enter any CONTRIBUTORS to your project:",
  },
  {
    // * Tests: string
    type: "input",
    name: "test",
    message: "Enter TESTS done on your project:",
  },
  {
    //   * User GitHub profile picture
    type: "input",
    name: "githubPic",
    message: "Upload your GITHUB PROFILE PICTURE:",
  },
  {
    // GitHub email
    type: "input",
    name: "email",
    message: "Enter your GITHUB EMAIL:",
  },
];

// where to save the file
const writeFile = (fileName, data)=>{
  fs.writeFile(fileName, generateMarkdown(data), (err)=> {
  if (err) {
    throw err;
  }
  console.log("file saved to README");
})
}

// create a file with name fileName
// writeto file fileName the data

function init() {
  // initialize the prompting of questions
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
  writeFile("README.md", answers);
}

init();
