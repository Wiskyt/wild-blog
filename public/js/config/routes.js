/*
Create Angular config in app.config module
*/
export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
   'use strict'
   // Define prefix
   $locationProvider.hashPrefix('!');
   // For each url not found redirection to '/'
   $urlRouterProvider.otherwise('/posts/');
   /*
     Define a state with name 'app' this state is abstract and url is empty (root of application)
     template is ui-view it's used to display nested views
   */
   $stateProvider.state('app', {
      url: '',
      abstract: true,
      template: '<navbar /><div class="container"><ui-view></ui-view></div>'
   })
      .state('callback', {
         url: '/auth/callback/:token',
         template: '',
         controller: ['UsersService', '$stateParams', '$state', function (UsersService, $stateParams, $state) {
            if ($stateParams.token) {
               UsersService.setToken($stateParams.token).then((user) => {
                  let toastContent = `Welcome ${user.name} !`
                  Materialize.toast(toastContent, 4000, 'toast-success')
                  $state.go('blog.list')
               })
            } else {
               $state.go('blog.list')
            }
         }]
      })
      .state('algo1', {
         url: '/algo1',
         template: '<h5> {{friends}} </h5>',
         controller: ['$scope', function ($scope) {
            $scope.people = ["Ryan", "Olliver", "C18", "John", "Sam", "Mark", "", "R2D2"];
            $scope.friends = $scope.people.filter((dude) => dude.length === 4);
         }]
      })
      .state('algo2', {
         url: '/algo1',
         template: '<h5> {{foldTo(14928418679754190000)}} </h5>',
         controller: ['$scope', function ($scope) {
            
            $scope.foldTo = function foldTo(distance) {
               if (!(typeof distance === 'number' && distance > 0)) return null;

               let nFold = 0;
               for (let thickness = 0.0001; thickness < distance; nFold++) thickness *= 2;

               return nFold;
            }
         }]
      })
}]
