  var express = require('express')
    var app = express()
    var path = require('path')
    app.get('/', function(req, res) {
       app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
    })
app.listen(process.argv[2])
