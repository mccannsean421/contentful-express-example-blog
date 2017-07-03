var express = require('express')
var router = express.Router()
var index = require('../services/index')//require corresponding service
var client = require('../services/contentfulClient').client

var exampleBlogs = [];

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      var bleg = {
      	title: entry.fields.title,
      	shortDescription: entry.fields.shortDescription
      }
      exampleBlogs.push(bleg)
    }
  })
})


router.get('/', function (req, res, next) {
	res.render('./../views/index.jade', {
		'blogs': exampleBlogs,
	});
})

module.exports = router