/*
Create Angular component blogList into module app.blog
*/
let blogList = {
   templateUrl: 'js/components/blog/blogList/blogList.html',
   controller: ['UsersService', 'PostsService', function (UsersService, PostsService) {
      'use strict'
      // Define startIndex variable with default value 3
      this.startIndex = 3

      // Call getCurrent() method from UsersService.
      // When this request receive response we affect response data to this controller variable user
      UsersService.getCurrent().then((user) => {
         this.user = user

         // Call get() method from PostsService.
         // When this request receive response we affect response data to this controller variable posts
         PostsService.getBookmarks(this.user.bookmarks).then((res) => {
            this.posts = res.data
         }).catch((err) => {
            this.posts = [{
               title: "Hello There",
               content: "I am an intersting article. There was an error by the way because API doesn't exist yet"
            }]
         })
      }).catch((err) => {
         console.log(err)
      })

      // Create loadMore function.
      // If you want to use in view, you can call with $ctrl.loadMore()
      this.loadMore = () => {
         // Add 3 to startIndex
         this.startIndex += 3
      }
   }]
}

export default blogList
