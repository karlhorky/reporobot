var Github = require('github-api')

module.exports = function(callback) {

  var github = new Github({
      auth: "oauth",
      token: process.env['REPOROBOT_TOKEN']
    })

  var issues = github.getIssues('jlord', 'sheetsee.js')

  issues.list({username: 'jlord', repo: 'sheetsee.js'}, callback)
}


