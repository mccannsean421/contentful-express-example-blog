var express = require('express')
var router = express.Router()
var index = require('../services/index')//require corresponding service

router.get('/', function (req, res, next) {
  //res.send('Testing');
  res.render('./../views/index.jade');
  index.getBlogs()
})

module.exports = router