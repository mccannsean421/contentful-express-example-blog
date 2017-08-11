var client = require('./contentfulClient').client

var blogs = [];

client.getEntries({order: '-sys.createdAt'})
	.then(function (entries) {
	// log the title for all the entries that have it
	entries.items.forEach(function (entry) {
	  if(entry.fields.title) {
	    console.log(entry.fields.title)
	    // DEBUG CODE

	    var blogObj = {
	      title: entry.fields.title
	    }

	    blogs.push(blogObj);
	    //console.log(blogs);
	  }
	})
})



//Make available for routes
module.exports = {
	blogs
}