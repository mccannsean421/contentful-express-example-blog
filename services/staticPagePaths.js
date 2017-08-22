var client = require('./contentfulClient').client

var staticPagePaths = [];

var staticPage = {
	title: 'title',
	content: 'content'
};

/****** Static Page Paths *****/
client.getEntries()
	.then(function (entries) {
	// log the title for all the entries that have it
	entries.items.forEach(function (entry) {
	  
	  if(entry.fields.pageTitle) {
  		staticPage.title = entry.fields.pageTitle;
  		staticPage.content = entry.fields.pageContent;
	  	staticPagePaths.push(entry.fields.slug);
	  	console.log(staticPagePaths);
	  }
	})
})

//Make available for routes
module.exports = {
	staticPagePaths
}