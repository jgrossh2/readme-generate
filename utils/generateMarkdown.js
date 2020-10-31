// function to generate markdown for README
const badge = (license) => {
  if (license !== "None") {
    return `![license badge](<https://img.shields.io/badge/License-${license}-blue.svg>)`
  } 
}

function generateMarkdown(data) {
  return `
  # ${data.name}
  ${badge(data.license)}
  
  ## Description
   ${data.description}
  
  ## Table of Contents
  * [Installation](#installation) <br />
  * [Usage](#usage) <br />
  * [License](#license) <br />
  * [Contributors](#contributors) <br />
  * [Tests](#tests) <br />
  * [Questions](#questions) <br />
  
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## License
    ${data.license}
  ## Contributors
    ${data.contributors}
  ## Tests
    ${data.tests}
  ## Questions
  ${data.github} <br />
  [GitHub profile](${data.profile}) <br />
  Please contact <${data.email}> for additional Information.
`;
}

module.exports = generateMarkdown;

