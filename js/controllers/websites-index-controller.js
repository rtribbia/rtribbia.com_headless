angular.module('mainSite').controller('WebsitesIndexController',function($scope, $sce, Website) {
    $scope.loading = true;
   Website.all().success(function(data) {
       data.posts.forEach(function(post,i) {
           var parsed = [];
           var arr = post.custom_fields.technologies_used[0].split('"');
           arr.forEach(function(i) { 
                if ((i.indexOf(':') == -1) && (i.indexOf(';') == -1))
                    parsed.push(i);
           });
           data.posts[i].custom_fields.technologies_used = parsed;
       });
       $scope.websites = data.posts;
       $scope.loading = false;
   });
});
