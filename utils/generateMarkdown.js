// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "") {
    return ""
  } else {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "") {
    return ""
  } else {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  [![License]]
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licBadge = renderLicenseBadge(data.license)
  const licLink = renderLicenseLink(data.license)
  const licSection = renderLicenseSection()
  return `
  # ${data.title}

`;
}

module.exports = generateMarkdown;
