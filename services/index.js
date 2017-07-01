var client = require('./contentfulClient').client


//Get ALL ENTRIES!!!!!
function getBlogs() {
	client.getEntries()
	.then(function (entries) {
	  // log the title for all the entries that have it
	  entries.items.forEach(function (entry) {
	    if(entry.fields.title) {
	      console.log(entry.fields.title);
	    }
	    /*if(entry.fields.body) {
	    	console.log(entry.fields.body)
	    }*/
	  })
	})
}



//Make available for routes
module.exports = {
  getBlogs
  
}