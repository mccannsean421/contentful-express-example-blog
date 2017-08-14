var express = require('express')
var router = express.Router()
var blogs = require('../services/index').blogs//require corresponding service
var blogPaths = require('../services/getBlogPaths').blogPaths
//Write service to get individual blog info

/**** INDEX ****/
router.get('/', function (req, res, next) {
  res.render('./../views/index.jade', {
    'blogs': blogs,
  });
})

/**** DYNAMIC ROUTES ****/
router.get(blogPaths, function (req, res, next) {
  res.render('./../views/blogPost.jade');
})

module.exports = router