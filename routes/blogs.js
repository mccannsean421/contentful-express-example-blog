var express = require('express')
var router = express.Router()
var client = require('../services/getBlogPaths').blogPaths

/**** DYNAMIC ROUTES ****/
router.get('/blog-site-tutorial-with-sails-js-and-contentful', function (req, res, next) {
  res.render('./../views/blogPost.jade');
})
