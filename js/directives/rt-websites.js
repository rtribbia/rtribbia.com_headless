angular.module('mainSite')
.directive('rtWebsites', ['$sce', function($sce) {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "templates/directives/rt-websites.html"
  };
}]);

