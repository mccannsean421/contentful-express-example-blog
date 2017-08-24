var express = require('express')
var router = express.Router()
var blogs = require('../services/index').blogs//require corresponding service
var index = require('../services/index')//require corresponding service
var blog = require('../services/index').blog//require corresponding service
var blogPaths = require('../services/getBlogPaths').blogPaths

router.get(blogPaths, function (req, res, next) {
	index.getBlog(req.url);
  res.render('./../views/blogPost.jade', {
  	'blog': blog
  });
});

module.exports = router