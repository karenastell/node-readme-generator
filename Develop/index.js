// npm init

// includes inquirer package
const inquirer = require("inquirer");

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

// const questions = [
  // array of questions
  inquirer.prompt([
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
    {
      // * Table of Contents:
      type: "input",
      name: "contents",
      message: "Enter your TABLE OF CONTENTS:",
      
    },
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
      type: "input",
      name: "license",
      message: "Enter LICENSE information:",
      
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
      // * Questions: array
      //   * User GitHub profile picture
      //   * User GitHub email
      type: "input",
      name: "github",
      message: "Upload your GITHUB PROFILE PICTURE and enter your GITHUB EMAIL:",
     
    }
  ]).then((answers)=>{
  console.log("TITLE", answers.title);
})

function writeToFile(fileName, data) {
  // where to save the file
  // create a file with name fileName
  // writeto file fileName the data
}

function init() {
  // initialize stuff that I need here
}

// init();
