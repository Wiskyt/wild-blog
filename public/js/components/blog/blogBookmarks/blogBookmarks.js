let blogBookmarks = {
   templateUrl: 'js/components/blog/blogBookmarks/blogBookmarks.html',
   controller: ['UsersService', 'PostsService', function (UsersService, PostsService) {
      'use strict'

      UsersService.getCurrent().then((user) => {
         this.user = user

         PostsService.getBookmarks(this.user.bookmarks).then((res) => {
            this.posts = res.data

            console.log('Found bookmarked articles !', this.posts)
         })

      }).catch((err) => {
         console.log(err)
      })

   }]
}

export default blogBookmarks
