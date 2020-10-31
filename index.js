const inquirer = require('inquirer');
// const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { setFlagsFromString } = require('v8');
// array of questions for user

const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!')
                    return false;
                }
            }
        },   
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the usage of this project.'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please list the contributions for this project.',
        },
        { 
            type: 'input',
            name: 'tests',
            message: 'List the tests that can be run',
        },
        { 
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for the application.',
            choices: [ 'MIT', 'GNU GPLv3', 'APACHE 2.0', 'ISC'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'profile',
            message: 'What is the link for your GitHub profile? (Required)',
            validate: profileInput => {
                if (profileInput) {
                    return true;
                } else {
                    console.log('Please enter the link to your GitHub profile.')
                    return false;
                }
            }
        },
        { 
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.')
                    return false;
                }
            }
        }
]

// function to write README file
// to write file need data from inputs
const writeToFile = (fileName, data) => {
    // return fs.writeFileSync(path.join(process.cwd(),fileName), data)
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err =>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File created!'
            });
            console.log('Generating README file...')
        
        });
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses)=> {
        writeToFile("output/README.md", generateMarkdown({...inquirerResponses}))
    })
}
// function call to initialize program
init();
