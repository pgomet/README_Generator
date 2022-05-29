// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require("./package.json");
const generateMarkdown = require("./utils/generateMarkdown");
const {writeFile, copyFile} = require('./utils/generateMarkdown');
const { type } = require("os");


// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "title",
                message: "What is the title of your project? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your project title!");
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'sections',
                message: 'What sections would you like to add to your project? (Check all that apply)',
                choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
            },
            {
                type: "input",
                name: "description",
                message: "What is the description of your project? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your project description!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "installation",
                message: "What is the installation instruction of your project? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your project installation instruction!");
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'licenses',
                message: 'What is your project license? (Check all that apply)',
                choices: ['MIT', 'Apache', 'GPL']
            },
            {
                type: "input",
                name: "usage",
                message: "What is the usage information of your project? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your project usage information!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "contribution",
                message: "What is the contribution guidelines of your project? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your project contribution guidelines!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "tests",
                message: "What are your test instructions of your project? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your project test instructions!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "GitHub",
                message: "What is your GitHub username? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your GitHub username!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "gmail",
                message: "What is your email address? (Require)",
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log("Please enter in your email address!");
                        return false;
                    }
                }
            }
        ]
    )
}

// TODO: Create a function to write README file
function generateReadMe(data){
    return `# ${data.title}
## Table-of-Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
     
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
    
## [Description](#table-of-contents)
  
${data.description}
  
## [Installation](#table-of-contents)
  
${data.installation}
  
## [Usage](#table-of-contents)
  
${data.usage}
  
## [Contribution](#table-of-contents)
    
${data.contribution}
      
## [Tests](#table-of-contents)
  
${data.tests}
  
## [Questions](#table-of-contents)
  
Please contact me using the following links:
  
[GitHub](https://github.com/${data.GitHub})
  
[Email: ${data.gmail}](mailto:${data.gmail})

## Licenses
${data.licenses}
`;
}

// TODO: Create a function to initialize app
// Function call to initialize app

promptQuestions().then((answers) =>{
    //console.log(generateReadMe(answers));
    fs.writeFile('generated-README.md', generateReadMe(answers), (err) =>
    {
        if (err) {
            console.error(err);
            return;
        }
    });
});
