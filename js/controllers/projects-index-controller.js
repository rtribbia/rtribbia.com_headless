angular.module('mainSite').controller('ProjectsIndexController',function($scope, $sce, Project) {
    $scope.loading = true;
   Project.all().success(function(data) {
       $scope.projects = data.posts;
       $scope.loading = false;
   });
});
