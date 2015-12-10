module.exports = {
   'facebookAuth' : {
        'clientID'      : '1643770935873365', // your App ID
        'clientSecret'  : '2c9548183278205cfd03e6614735c6c3', // your App Secret
        'callbackURL'   : 'http://localhost:5000/#/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

}
