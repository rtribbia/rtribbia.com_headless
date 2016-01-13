angular.module('mainSite')
.directive('rtResume', ['$sce', function($sce) {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "templates/directives/rt-resume.html"
  };
}]);

