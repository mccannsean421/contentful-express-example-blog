/***

	RETRIEVE CONTENT FOR STATIC PAGES

***/

var client = require('./contentfulClient').client

//Object for static page content
var staticPage = {
	title: '',
	content: ''
}

/****** Static Page Paths *****/
function getAboutPage() {
	client.getEntry('MlsiDTASmycAgQYqYyMq0')
	.then(function (entry) {
	  // logs the field with ID title
	  staticPage.title = entry.fields.pageTitle; 
	  staticPage.content = entry.fields.pageContent; 
	  return staticPage.title;
	})
}

//Make available for routes
module.exports = {
	getAboutPage,
	staticPage
}