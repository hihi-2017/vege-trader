var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./routes/index')

var app = express()

// Middleware

app.engine('hbs', hbs({extname: 'hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
// remove stuff when not needed app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

// Routes

app.use('/api', index)

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}
