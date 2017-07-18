module.exports = {
   "development": {
      db: process.env.MONGODB_URI || require('./dev').db,
      secretToken: process.env.SECRET_TOKEN || 'secretToken',
      env: 'development',
      facebookAuth: {
         clientID: process.env.FACEBOOK_CLIENT_ID || require('./dev').facebookAuth.clientID, // your App ID
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET || require('./dev').facebookAuth.clientSecret, // your App Secret
         callbackURL: process.env.FACEBOOK_CALLBACK || require('./dev').facebookAuth.callbackURL
      }
   },
   "production": {
      db: process.env.MONGODB_URI || 'mongodb://localhost:27017/blog',
      secretToken: process.env.SECRET_TOKEN || 'secretToken',
      env: 'production',
      facebookAuth: {
         clientID: process.env.FACEBOOK_CLIENT_ID, // your App ID
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET, // your App Secret
         callbackURL: process.env.FACEBOOK_CALLBACK
      }
   }
}
