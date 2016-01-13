angular.module('mainSite').controller('ProjectsShowController', function($scope, $sce, $routeParams, Project) {
    $scope.loading = true;
   Project.all().success(function (data) { 
        
         var posts = data.posts;
         for (var i = 0; i < posts.length; i++) {
            if (posts[i].id == $routeParams.id) {
                $scope.project = posts[i];
                $scope.project.content = $sce.trustAsHtml($scope.project.content);
                $scope.project.custom_fields.project_features = $scope.project.custom_fields.project_features[0].split('\n');
                $scope.project.custom_fields.languages = $scope.project.custom_fields.languages[0].split(',');
                var libraries = [];
                $scope.project.custom_fields.libaries[0].split('\n').forEach(function(row) {
                    var libraryObj = {};
                    var tempArr = row.split(',');
                    libraryObj.lib = tempArr[0];
                    libraryObj.url = tempArr[1];
                    libraries.push(libraryObj);
                });
                $scope.project.custom_fields.libraries = libraries;
                $scope.loading = false;
            }
         }
      });;
});



