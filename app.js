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



var app = express()



/****** ROUTING ******/
var index = require('./routes/index.js') //define route
app.use('/', index) //apply route

/****** ALLOW STATIC CONTENT *******/
app.use(express.static(path.join(__dirname, 'public')))

/***** PORT CONFIGURATION *****/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})