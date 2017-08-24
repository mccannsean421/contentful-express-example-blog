/***

	Defines routes for static pages

***/


var express = require('express')
var router = express.Router()
var blogs = require('../services/index').blogs//require corresponding service
var index = require('../services/index')//require corresponding service
var about = require('../services/staticPages')
var staticPage = require('../services/staticPages').staticPage//require corresponding service

/*** GET CONTENT FOR ABOUT PAGE ***/
about.getAboutPage();//Retrieves content from about page.

/**** INDEX ****/
router.get('/', function (req, res, next) {
  res.render('./../views/index.jade', {
    'blogs': blogs,
  });
});

/**** ABOUT ****/
router.get('/about', function (req, res, next) {
  res.render('./../views/about.jade', {
    'staticPage': staticPage,
  });
});

module.exports = router