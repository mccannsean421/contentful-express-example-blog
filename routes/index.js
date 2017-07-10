var express = require('express')
var router = express.Router()
var index = require('../services/index')//require corresponding service
var client = require('../services/contentfulClient').client

var exampleBlogs = [];
var blogPaths = [];

client.getEntries({order: '-sys.createdAt'})
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      console.log(entry.fields.date)
      var bleg = {
        title: entry.fields.title,
        author: entry.fields.author,
        body: entry.fields.body,
        shortDescription: entry.fields.shortDescription,
        blogPath: entry.fields.title.replace(/\s+/g, '-').toLowerCase(),
        postDate: entry.fields.date
      }
      exampleBlogs.push(bleg)
      //console.log(bleg.author);
      router.get('/' + bleg.blogPath, function (req, res) {
        res.render('./../views/blogPost.jade', {
          'title': bleg.title,
          'currentBlog': bleg.title,
          'blogBody': bleg.body,
          'blogPath': bleg.blogPath,
          'blogAuthor': bleg.author,
          'blogPublishDate': bleg.postDate
        });
      })
    }
  })
})

/**** INDEX ****/
router.get('/', function (req, res, next) {
  res.render('./../views/index.jade', {
    'blogs': exampleBlogs,
  });
})

/**** ABOUT ****/
router.get('/about', function (req, res) {
  client.getEntry('5wcUDTrUoEowEAA6WsG2iM')
    .then(function (entry) {
      console.log('photo:' + entry.fields.profilePhoto);
      //retrieve photo
      var author = {
        authorName: entry.fields.name
      }
      res.render('./../views/about.jade', {
        'authorName': author.authorName,
        'authorProfilePicSrc': 'https://images.contentful.com/nckonzuwzubf/6lwsOcpyCc8sIC2MqMCEQC/f7769c5011027591f92688cdba6eba63/Snapchat-6200244860743713401.jpg'
      });
  })

})

router.get('/blog-archive', function (req, res) {
  res.render('./../views/blogs.jade');
})

//Generate router views
for(var i = 0; i < blogPaths.length; i++) {
  console.log('Path: ' + blogPaths[i])
}


module.exports = router