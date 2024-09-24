// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "none") {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license) {
  return '';
}
switch (license) {
  case 'MIT':
      return 'https://opensource.org/licenses/MIT';
  case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
  case 'Apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
  default:
      return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
}

switch (license) {
    case 'MIT':
        return `## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`;
    case 'GPLv3':
        return `## License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.`;
    case 'Apache-2.0':
        return `## License
This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.`;
    default:
        return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;

const exampleData = {
  title: 'My Project',
  description: 'This is a sample project.',
  installation: 'To install, run `npm install`.',
  usage: 'To use, run `npm start`.',
  contributing: 'To contribute, open a pull request.',
  tests: 'To run tests, run `npm test`.',
  license: 'MIT',  // Could be 'MIT', 'GPLv3', 'Apache-2.0', or an empty string
};

console.log(generateMarkdown(exampleData));