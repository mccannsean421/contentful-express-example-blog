/***
*
* Contentful API calls to retrieve content
*
***/

//Dependencies
var contentful = require('contentful')
var util = require('util')

//Credentials
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ''
});

// first time you are syncing make sure to spcify `initial: true`
client.sync({initial: true}).then((response) => {
  // You should save the `nextSyncToken` to use in the following sync
  console.log(response.nextSyncToken)
})

/*
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client.getContentType('2wKn6yEnZewu2SCCkus4as')
.then(function (contentType) {
  //console.log(util.inspect(contentType, {depth: null}))
})

//return a single a entry
client.getEntry('4KgYnruiYUeCs6WK4Uw6uc')
.then(function (entry) {
  // logs the entry metadata
  //console.log(entry.sys)

  // logs the field with ID title
  //console.log(entry.fields.title)
})

//Get ALL ENTRIES!!!!!
client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      console.log(entry.fields.title)
    }
    if(entry.fields.body) {
    	console.log(entry.fields.body)
    }
  })
})*/

exports.client = client
