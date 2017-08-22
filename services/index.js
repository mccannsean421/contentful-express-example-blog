var client = require('./contentfulClient').client
var marked = require('marked'); //parsing library

var blogs = [];

var blog = {
	title: 'testing title',
	body: 'body of blog',
	date: 'date',
	author: 'author'
}

/**** GET BLOG INFO ****/
var blogAuthor = '';

client.getEntries({order: '-sys.createdAt'})
	.then(function (entries) {
	// log the title for all the entries that have it
	entries.items.forEach(function (entry) {
	  
	  if(entry.fields.name) {
	  	blogAuthor = entry.fields.name;
	  }
	})
})

/**** GET BLOG INFO ****/
client.getEntries({order: '-sys.createdAt'})
	.then(function (entries) {
	// log the title for all the entries that have it
	entries.items.forEach(function (entry) {
	  if(entry.fields.title) {
	    var blogPath = '/'+entry.fields.slug;
	    var blogObj = {
	      title: entry.fields.title,
	      slug: entry.fields.slug,
	      path: blogPath,
	      body: entry.fields.body,
	      date: entry.fields.date,
	      author: blogAuthor
	    }
	    
	    blogs.push(blogObj);
	    console.log(blogAuthor);
	  }
	})
})

function getBlog(blogPath) {
	for(var i = 0; i < blogs.length; i++) {	
		if(blogs[i].path == blogPath ) {
			blog.title = blogs[i].title;
			blog.body = marked(blogs[i].body); //parse contentful markdown
			blog.date = blogs[i].date;
			blog.author = blogs[i].author;
			//console.log(blog.author);
		}
	}
}




//Make available for routes
module.exports = {
	blogs,
	blog,
	getBlog
}