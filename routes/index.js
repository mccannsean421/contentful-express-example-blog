var express = require('express')
var router = express.Router()
var blogs = require('../services/index').blogs//require corresponding service
var blogPaths = require('../services/getBlogPaths').blogPaths
//Write service to get individual blog info

var blog = {
	title: 'testing title'
}

/**** INDEX ****/
router.get('/', function (req, res, next) {
  res.render('./../views/index.jade', {
    'blogs': blogs,
  });
})


function getBlog(blogPath) {
	for(var i = 0; i < blogs.length; i++) {	
		if(blogs[i].path == blogPath ) blog.title = blogs[i].title;
	}
}

/**** DYNAMIC ROUTES ****/
router.get(blogPaths, function (req, res, next) {
  getBlog(req.url);
  res.render('./../views/blogPost.jade', {'blog': blog});
})

module.exports = router