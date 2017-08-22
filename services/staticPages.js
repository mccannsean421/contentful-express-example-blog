var client = require('./contentfulClient').client

var staticPage = {
	title: 'adada',
	content: 'adadada'
}

/****** Static Page Paths *****/
function getAboutPage() {
	console.log('get about page');
	client.getEntry('MlsiDTASmycAgQYqYyMq0')
	.then(function (entry) {
	  // logs the field with ID title
	  staticPage.title = staticPage.title; 
	  console.log(staticPage.title);
	  return staticPage.title;
	})
}

//Make available for routes
module.exports = {
	getAboutPage,
	staticPage
}