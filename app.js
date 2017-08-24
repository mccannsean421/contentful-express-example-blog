/***
*
* APP ENTRY 
*
***/

/******  DEPENDENCIES  ******/
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var compression = require('compression')
var helmet = require('helmet')
var index = require('./routes/index');//define route
var posts = require('./routes/posts');//define route
var about = require('./routes/about');//define route

var app = express()

/****** ROUTING ******/
app.use('/', index); //apply route
app.use('/about', about); //apply route
app.use('/post', posts); //apply route


/****** ALLOW STATIC CONTENT *******/
app.use(express.static(path.join(__dirname, 'public')))

/***** PORT CONFIGURATION *****/
app.listen(3000, function () {
  console.log('Listening on port 3000!')
})