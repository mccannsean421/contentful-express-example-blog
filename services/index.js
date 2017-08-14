var client = require('./contentfulClient').client

var blogs = [];

client.getEntries({order: '-sys.createdAt'})
	.then(function (entries) {
	// log the title for all the entries that have it
	entries.items.forEach(function (entry) {
	  if(entry.fields.title) {
	    
	    var blogPath = '/'+entry.fields.slug;
	    var blogObj = {
	      title: entry.fields.title,
	      slug: entry.fields.slug,
	      path: blogPath
	    }

	    blogs.push(blogObj);
	  }
	})
})

//Make available for routes
module.exports = {
	blogs
}