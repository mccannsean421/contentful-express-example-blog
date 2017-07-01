var express = require('express')
var router = express.Router()
var index = require('../services/index')//require corresponding service
var client = require('../services/contentfulClient').client




router.get('/', function (req, res, next) {
  //res.render('./../views/index.jade');
  	var blogs = []

	client.getEntries()
	.then(function (entries) {
	  entries.items.forEach(function (entry) {
	    if(entry.fields.title) {
	      //console.log(entry.fields.title);
	      blogs.push(entry.fields.title)
	      console.log(blogs);
	    }
	  })
	})
	

	res.render('./../views/index.jade', {
		'blogs': ['blog 1', 'blog 2']
	});
})

module.exports = router