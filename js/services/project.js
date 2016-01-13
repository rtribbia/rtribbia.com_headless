angular.module('mainSite')
.factory('Project', ['$http', function ProjectFactory($http) {
  return {
    all: function() {
    	console.log('sending req projects');
      return $http.jsonp('index_wp.php?json=get_recent_posts&post_type=project&callback=JSON_CALLBACK');     
    },
  };
}]);
