// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.FileName}

  ## License 
${data.License ? data.License : ""} 

  ## Table of Contents 
  [Description](#description)<br />
  [Installation Instructions](#installation-instructions)<br />
  [Usage Information](#usage-information)<br />
  [Contributing Guidelines](#contribution-guidelines)<br />
  [Testing Instructions](#testing-instructions)<br />
  [Questions](#questions)<br />
  
  ## Title of Application
  ${data.Title}

  ## Description 
  ${data.Description}
  
  ## Installation Instructions
  ${data.Installation}
  
  ## Usage Information 
  ${data.Usage}
  ## Contributing Guidelines 
  ${data.Contribution}
  ## Testing Instructions
  ${data.Testing}
  ## Questions? 
  Email Me: ${data.Email}

  My Github: https://github.com/${data.Username}

`;
}

module.exports = generateMarkdown;
