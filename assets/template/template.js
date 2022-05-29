function generateReadMe(answers){
    return `
    <h1> ${answers.projectTitle}<h1>

    ## Project Description
    ${answers.projectDescription}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributors](#contributors)
    - [Test](#test)
    - [Github Username](#github)
    - [Email](#Email)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.use}

    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-blue)
    <br />

    ## Contributors
    ${answers.contributors}

    ## Test
    ${answers.test}

    ## GitHub Username
    ${answers.username}

    ## Email
    ${answers.email}
    `
}

module.exports = generateReadMe;