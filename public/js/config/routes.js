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
         url: '/algo2',
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
      .state('algo3', {
         url: '/algo3',
         template: '<h5> {{ battle([ [ 1, 3 ], [ 3, 4 ] ], [ [ 2, 8 ], [5, 2] ]) }} </h5>',
         controller: ['$scope', function ($scope) {
            
            $scope.battle = function battle(player1, player2) {
               let length = player1.length > player2.length ? player2.length : player1.length;
               
               for (let i = 0; i < length; i++) {
                 let p1c = player1[i], p2c = player2[i];
                   
                 if (p1c[1] - p2c[0] <= 0) p1c[1] = 0;
                 if (p2c[1] - p1c[0] <= 0) p2c[1] = 0;
               }
               
               return {
                 player1: player1.filter((c) => c[1] > 0),
                 player2: player2.filter((c) => c[1] > 0)
               }
             }
         }]
      })


      function battle(player1, player2) {
         let length = player1.length > player2.length ? player2.length : player1.length;
         
         for (let i = 0; i < length; i++) {
           let p1c = player1[i], p2c = player2[i];
             
           if (p1c[1] - p2c[0] <= 0) p1c[1] = 0;
           if (p2c[1] - p1c[0] <= 0) p2c[1] = 0;
         }
         
         return {
           player1: player1.filter((c) => c[1] > 0),
           player2: player2.filter((c) => c[1] > 0)
         }
       }
}]
