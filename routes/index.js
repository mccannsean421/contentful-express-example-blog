var express = require('express')
var router = express.Router()
var index = require('../services/index')//require corresponding service
var client = require('../services/contentfulClient').client

var exampleBlogs = [];
var blogPaths = [];

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      var bleg = {
      	title: entry.fields.title,
        author: entry.fields.author,
        body: entry.fields.body,
      	shortDescription: entry.fields.shortDescription,
        blogPath: entry.fields.title.replace(/\s+/g, '-').toLowerCase() 
      }
      exampleBlogs.push(bleg)
      //bleg.title.replace(/\s+/g, '-').toLowerCase()) //adjust strings and add to paths
      console.log(bleg.blogPath);
      router.get('/' + bleg.blogPath, function (req, res) {
        res.render('./../views/blogPost.jade', {
          'title': bleg.title,
          'currentBlog': bleg.title,
          'blogBody': bleg.body
        });
      })
    }
  })
})


router.get('/', function (req, res, next) {
	res.render('./../views/index.jade', {
		'blogs': exampleBlogs,
	});
})

router.get('/about', function (req, res) {
  res.render('./../views/about.jade');
})

router.get('/blog-archive', function (req, res) {
  res.render('./../views/blogs.jade');
})

/*router.get('/blog-post', function (req, res) {
  res.render('./../views/blogPost.jade', {
    'currentBlog': 'Bro'
  });
})*/

//Generate router views
for(var i = 0; i < blogPaths.length; i++) {
  console.log('Path: ' + blogPaths[i])
}


module.exports = router