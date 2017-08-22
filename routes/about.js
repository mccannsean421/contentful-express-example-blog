var express = require('express')
var router = express.Router()
//Write service to get individual blog info

/**** ADD STATIC PAGE ROUTES ****/
router.get('/about', function (req, res, next) {
  res.render('./../views/about.jade');
})

module.exports = router