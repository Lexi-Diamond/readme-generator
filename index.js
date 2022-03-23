// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'name',
        message: 'What is your Name?'
    },
    
     {
       type:'input', 
       name:'github',
       message:'What is your github username?'
     },  
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your application?',
      },
      {
      
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your program have?',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'NONE']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {}
        return console.log(err)

    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


