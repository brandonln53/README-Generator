function generateProjectURL(github, title) {
    const caseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${caseTitle}`;
}

function renderLicenseBadge(license, github, title) {
    if (license !== "none") {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectURL(github, title)})`

    }

    return "";
}

function renderLicenseSection(license) {
    if (license !== "none") {
        return (`## License - This Project is Licensed Under ${license} License`);
    }

    return "";
}

function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license, data.github, data.title)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue ticket or contact [${data.github}](${data.url}) directly at ${data.email}.
${data.questions}
${data.badge}

`;
}

module.exports = generateMarkdown;
