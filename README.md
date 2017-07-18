# wild-blog

## A MEAN Stack blog platform, featuring

   - Local user registering / connection
   - Facebook OAuth connection
   - Administration panel
   - Transferrable user rights 
   - Creation and edition of articles


## How to start the project ?

   You need to create a dev.js file in config/ that follows this pattern

   ```js
   module.exports = {
      db: 'YOUR_MONGODB_URI',
      facebookAuth: {
         clientID: "XXX", // your App ID
         clientSecret: "XXX", // your App Secret
         callbackURL: "http://localhost:YOUR_PORT/api/auth/facebook/callback"
      }
   }
   ```

   You can then start the project
   
   ````````
   npm i && npm run dev
   `````````
