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

/**** Services ****/
var contentful = require('contentful')
var util = require('util')

//Credentials
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ''
});

var blogs = [];

//Get ALL ENTRIES!!!!!
client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      var blogTitle = entry.fields.title;
      console.log(entry.fields.title);
      blogs.push(blogTitle);
    }
  })
})

/****** ROUTING ******/
app.get('/', function (req, res) {
  //res.send('hello world')
  res.send(blogs[0]);
})

/***** PORT CONFIGURATION *****/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})