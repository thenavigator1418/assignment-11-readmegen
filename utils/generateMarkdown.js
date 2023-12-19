// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${projName}

  ## Description
  ${data.projDesc}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributions & Credits
  ${data.credits}

  ## Testing
  ${data.test}

  ## Questions
  Please contact me on my Github, my username is ${data.questions}.
`;
}

module.exports = generateMarkdown;
