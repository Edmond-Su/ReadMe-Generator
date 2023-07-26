// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, link) {
  if (license == "None") {
    return ""
  } else {
    license = license.replace(" ", "_")
    return `[![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)](${link})`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "https://opensource.org/license/mit/"
  } else if (license == "APACHE 2.0") {
    return "https://opensource.org/license/apache-2-0/"
  } else if (license == "GPL 3.0") {
    return "https://opensource.org/license/gpl-3-0/"
  } else if (license == "BSD 3") {
    return "https://opensource.org/license/bsd-3-clause/"
  } else {
    return ""
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ""
  } else {
    return `## License
    
This project is licensed under the ${license} license`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licLink = renderLicenseLink(data.license)
  const licBadge = renderLicenseBadge(data.license, licLink)
  const licSection = renderLicenseSection(data.license)
  return `
# ${data.projectName}

${licBadge}

## Description

${data.desc}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:
~~~
${data.install}
~~~

## Usage

${data.repoUse}

${licSection}

## Contributing

${data.repoContribute}

## Tests

To run tests, run the following command:
~~~
${data.test}
~~~

## Questions

Here is my Github: [ ${data.github} ](https://github.com/${data.github})

or you can send any questions to my email: ${data.email}

`;
}

// Exporting function for use in other js files
module.exports = generateMarkdown;
