var contentful = require('contentful')
var util = require('util')
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'developer_bookshelf',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '0b7f6x59a0'
});

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client.getEntry('5PeGS2SoZGSa4GuiQsigQu')
.then(function (entry) {
  console.log(util.inspect(entry, {depth: null}))
})