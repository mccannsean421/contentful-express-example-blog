var express = require('express')
var router = express.Router()
var blogs = require('../services/index').blogs//require corresponding service
var client = require('../services/contentfulClient').client


//var blogPaths = [];



/**** INDEX ****/
router.get('/', function (req, res, next) {
  console.log('ROUTE: ' + blogs);
  res.render('./../views/index.jade', {
    'blogs': blogs,
  });
  //res.render('./../views/index.jade');
})

module.exports = router