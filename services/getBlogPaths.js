var client = require('./contentfulClient').client

var blogPaths = [];

client.getEntries({order: '-sys.createdAt'})
	.then(function (entries) {
	// log the title for all the entries that have it
	entries.items.forEach(function (entry) {
	  if(entry.fields.title) {
	    var blogPath = '/'+entry.fields.slug;
	    blogPaths.push(blogPath);
	  }
	})
})

//Make available for routes
module.exports = {
	blogPaths
}