angular.module('mainSite')
.directive('rtProjects', ['$sce', function($sce) {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "templates/directives/rt-projects.html"
  };
}]);

