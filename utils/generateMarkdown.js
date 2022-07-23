// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license=="MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if(license=="GNU") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else{
    return '';
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license=='MIT'){
    return '[MIT License Information](https://opensource.org/licenses/MIT)';
  }
  else if (license=="GNU"){
    return '[GNU GPL v3 License Information](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=="No license"){
    return '## License';
  }
  else{
    return '';
  }
};




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title,description,installation,usage,contribution,testing,license,githubUser,email}=data;
  const badge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);    
  const licenseLink = renderLicenseLink(license);
  
  function renderLicenseTOC(licenseSection){
    return (licenseSection? '* [License](#license)':'')
  }

  const licenseTOC = renderLicenseTOC(licenseSection);
  return `
  
  # ${title} ${badge}

  ## Description
  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ${licenseTOC}
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contribution}

  ## Tests
  ${testing}

  ${licenseSection}

  ${licenseLink}

  ## Questions

  * [View my github profile](https://github.com/${githubUser})
  * If you have questions about this project, you can email me at ${email}
`;
}

module.exports = generateMarkdown;
