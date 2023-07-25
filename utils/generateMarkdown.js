// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ""
  } else {
    license = license.replace(" ", "_")
    return `https://img.shields.io/badge/License-${license}-blue.svg`
  }
}

// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "") {
    return ""
  } else {
    return `
    ## License
    This project is licensed under the ${license} license
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licBadge = renderLicenseBadge(data.license)
  const licLink = renderLicenseLink(data.license)
  const licSection = renderLicenseSection(data.license)
  return `
  # ${data.title}

  [![GitHub License](${licBadge})](${licLink})

  ## Description
  ${data.desc}

  ## Table of Contents

  *[Installation](#Installation)

  *[Usage](#Usage)

  *[License](#License)

  *[Contributing](#Contributing)

  *[Tests](#Tests)

  *[Questions](#Questions)

  ## Installation
  ~~~
  ${data.install}
  ~~~

  ##Usage
  ${data.repoUse}

  ##
  ${licSection}


`;
}

module.exports = generateMarkdown;
