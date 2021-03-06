var express = require('express')
var router = express.Router()
var blogs = require('../services/index').blogs//require corresponding service
var index = require('../services/index')//require corresponding service
var blog = require('../services/index').blog//require corresponding service
var blogPaths = require('../services/getBlogPaths').blogPaths

/* blogPaths is an array containing the urls for all published blogs */
router.get(blogPaths, function (req, res, next) { 
  index.getBlog(req.url); // Get the blog content associated with the URL
  res.render('./../views/blogPost.jade', {
  	'blog': blog
  });
});

module.exports = router