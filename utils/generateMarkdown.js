// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license ==='APACHE 2.0') {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license === 'BSD 3') {
    badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else {
    badge = " "
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenceLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://www.mit.edu/~amini/LICENSE.md'
  }
  else if(license === "APACHE 2.0") {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  else if(license === 'BSD 3') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  }
  else {
    licenseLink = ' '
  }
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(licenseSection === "NONE") {
    licenseSection = ''
  }
  else {
    licenseSection = `Licence: ${license}`
}
return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.title}
  ## License: ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ## ${renderLicenseLink(data.license)}
  ## Description: ${data.description}
  
  ## Table of Contents:
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributing](#contributing)
  ### * [Tests](#tests)

  ## Installation instructions: ${data.installation}
  ## Usage Information: ${data.usage}
  ## Contributing: ${data.contributing}
  ## Tests: ${data.tests}
  
  ## Questions: Github-${data.questions}, Email-${data.email}`
          
};

module.exports = generateMarkdown;
