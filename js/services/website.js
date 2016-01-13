angular.module('mainSite')
.factory('Website', ['$http', function WebsiteFactory($http) {
  return {
    all: function() {
    	console.log('sending req websites');
	   //return $http({method: 'GET', url: "index_wp.php?json=get_recent_posts&post_type=website"});
        return $http.jsonp('index_wp.php?json=get_recent_posts&post_type=website&callback=JSON_CALLBACK');  //for local dev
        
    },
  };
}]);
