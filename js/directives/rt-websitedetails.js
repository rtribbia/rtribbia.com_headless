angular.module('mainSite')
.directive('rtWebsitedetails', ['$sce', function($sce) {
  return {
    replace: true,
    restrict: "E",
    scope: {
      header: "=",
      body: "=",
      image: "=",
      icon: "@",
      id: "=",
      type: "@"
    },
    templateUrl: "templates/directives/rt-websitedetails.html",
    link: function(scope, element) { //Best area for DOM manipulation as it loads after the render.
//      scope.body = $sce.trustAsHtml(scope.body);

    }
  };
}]);

