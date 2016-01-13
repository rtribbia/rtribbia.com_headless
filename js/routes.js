
angular.module('mainSite').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the notes index
      redirectTo: '/home'
    })

    .when('/home', {
      templateUrl: 'templates/pages/home/home.html'//,
      //controller: 'ProjectsIndexController'
    })
    
    .when('/projects/:id', {
      templateUrl: 'templates/pages/projects/show.html',
      controller: 'ProjectsShowController'
    })

   .otherwise({redirectTo: '/'});
}]);
