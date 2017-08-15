var client = require('./contentfulClient').client

var blogs = [];
var blog = {
	title: 'testing title',
	body: 'body of blog'
}


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
	      body: entry.fields.body
	    }
        console.log('info: ' + blogObj.body);
	    blogs.push(blogObj);
	  }
	})
})

function getBlog(blogPath) {
	for(var i = 0; i < blogs.length; i++) {	
		if(blogs[i].path == blogPath ) {
			blog.title = blogs[i].title;
			blog.body = blogs[i].body;
		}
	}
}


//Make available for routes
module.exports = {
	blogs,
	blog,
	getBlog
}