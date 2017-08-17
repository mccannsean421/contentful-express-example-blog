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
  space: 'nckonzuwzubf',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '08c680e8b88f4b231dc8393a2332cd1aa217266db64554d95194937ce32017f5'
});


// first time you are syncing make sure to spcify `initial: true`
client.sync({initial: true}).then((response) => {
  // You should save the `nextSyncToken` to use in the following sync
  console.log(response.nextSyncToken)
})

exports.client = client;

