// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatePage = require("./package.json");


// TODO: Create an array of questions for user input

const promptQuestions = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "question",
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
                name: "question",
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
                name: "question",
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
                type: "input",
                name: "question",
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
                name: "question",
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
                name: "question",
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
                name: "question",
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
                name: "question",
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
/*function writeToFile(fileName, data) {}
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        FileSystem.writeToFile(fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
        
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
}*/

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

promptQuestions();
/*promptQuestions().then((answers) => {
    console.log('hello wolrd');
});*/
