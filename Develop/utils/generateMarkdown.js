function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.badge}
# ${data.title}
# ${data.description}
# ${data.install}
# ${data.usage}
# ${data.license}
# ${data.contributors}
# ${data.test}
# ${data.githubPic}
# ${data.email}

`;
}

module.exports = generateMarkdown;
