var fs = require('fs')
var file = 'contributors.json'

module.exports = function(stats, callback) {
  console.log("these are the stats", stats)
  
  fs.readFile(file, function (err, data) {
    if (err) console.log(err)
    
    var oldData = data.toString()
    
    if (oldData === "") var array = []
    else var array = JSON.parse(data)
    
    array.push(stats)
    writeFile(file, JSON.stringify(array, null, " "), callback)
  })
}

function writeFile(file, array, callback) {
  var totalcontributors = array.length
  var newestcontributor = array[totalcontributors].username.toString()
  fs.writeFile(file, array, function (err) {
    if (err) console.log(err)
    console.log("Added" + newestcontributor + " to contributor file")
    callback()
  }) 
}
