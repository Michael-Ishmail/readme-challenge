const fs = require('fs')
const util = require('util')
const inquirer = require('inquirer')
const generateReadMe = require('../template/template')
const writeFile = util.promisify(fs.writeFile)

function questions(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the project title?',
        },

        {
            type: 'input',
            name: 'projectDescription',
            message: 'Write a description of the project.',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process.',
        },

        {
            type: 'input',
            name: 'use',
            message: 'What will this project be used for?',
        },

        {
            type: 'list',
            name: 'license',
            message: 'Chose the license for the project.',
            choices: [
                "Academic",
                "Open",
                "ISC",
                "GNU",
                "MIT",
            ]
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'Who will be contributing to the project?',
        },

        {
            type: 'input',
            name: 'test',
            message: 'Is a test included?',
        },

        {
            type: 'input',
            name: 'issue',
            message: 'What should be done if there is an issue?',
        },

        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },

    ])
}

async function init(){
    try {
        const answers = await questions()
        const generate = generateReadMe(answers)
        await writeFile('../readME/README.md', generate)
        console.log('Readme.md successfully generated')
    } catch(err){
        console.log(err)
    }
}

init();