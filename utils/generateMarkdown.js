// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.FileName}

  ## License 
${data.License ? data.License : ""} 

  ## Table of Contents 
  [Description](#Description)<br />
  [Installation Instructions](#Installation-instructions)<br />
  [Usage Information](#Usage-information)<br />
  [Contributing Guidelines](#Contribution-guidelines)<br />
  [Testing Instructions](#Testing-instructions)<br />
  [Questions](#Questions)<br />
  
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
  My Github: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
