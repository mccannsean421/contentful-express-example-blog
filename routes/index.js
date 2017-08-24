var express = require('express')
var router = express.Router()
var blogs = require('../services/index').blogs//require corresponding service
var index = require('../services/index')//require corresponding service
//Write service to get individual blog info

/**** INDEX ****/
router.get('/', function (req, res, next) {
  res.render('./../views/index.jade', {
    'blogs': blogs,
  });
});

module.exports = router