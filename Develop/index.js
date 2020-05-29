// npm init

// includes inquirer package
const inquirer = require("inquirer");
// includes fs package
const fs = require("fs");
// includes the generateMarkdown function from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");


  // array of questions
  const questions =[
    {
      //badge
      type: "input",
      name: "badge",
      message: "Enter a BADGE:"

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
      type: "list",
      name: "license",
      message: "Enter LICENSE information:",
      choices: ["BSD", "MIT", "GPL", "No License"]
      
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
  ]
//   .then((answers)=>{
//   console.log("TITLE", answers.title);
// })

// fs.writeFile("person.html", html, (error) => {
//     if (error) {
//         console.error(error);
//     }

//     console.log("File saved successfully!");
// })

  // where to save the file
  // fs.writeFile("README.md", questions, (err)=> {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log("file saved to README");
  // })
  // create a file with name fileName
  // writeto file fileName the data


function init() {
  // initialize the prompting of questions
  inquirer.prompt(questions).then((answers)=>{
    console.log(answers);
  })
}

init();
