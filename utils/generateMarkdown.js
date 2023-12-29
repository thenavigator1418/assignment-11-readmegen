// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projName}

  ## Description
  ${answers.projDesc}

  ## Installation
  ${answers.install}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributions & Credits
  ${answers.credits}

  ## Testing
  ${answers.test}

  ## Questions
  Please contact me on my Github, my username is ${answers.questions}.
`;
}

module.exports = generateMarkdown;
