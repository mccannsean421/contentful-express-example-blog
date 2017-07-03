var express = require('express')
var router = express.Router()
var index = require('../services/index')//require corresponding service
var client = require('../services/contentfulClient').client

var exampleBlogs = [];

/*client.getEntry('4KgYnruiYUeCs6WK4Uw6uc')
.then(function (entry) {
  example = entry.fields.title;
  exampleBody = entry.fields.body;
  //console.log(example);
})*/	

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      //console.log(entry.fields.title)
      //console.log(entry.fields.body)
      var bleg = {
      	title: entry.fields.title,
      	body: entry.fields.body
      }
      exampleBlogs.push(bleg)
      console.log(exampleBlogs);
    }
  })
})


router.get('/', function (req, res, next) {
	res.render('./../views/index.jade', {
		'blogs': exampleBlogs,
	});
})

module.exports = router