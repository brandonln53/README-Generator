function generateProjectURL(github, title) {
    const caseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${caseTitle}`;
}

function renderBadge(license, github, title) {
    if (license !== "none") {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectURL(github, title)})`

    }

    return "";
}

function renderSection(license) {
    if (license !== "none") {
        return (`## License - This Project is Licensed Under ${license} License`);
    }

    return "";
}

function generateMarkdown(data) {
    //...
}
module.exports = generateMarkdown;