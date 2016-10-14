  angular.module('membershipExtension').controller('MembershipExtensionCtrl', function($scope, membershipService) {
    $scope.results = [];
    $scope.startDate = '1900-01-01';
    $scope.endDate = new Date().toISOString().slice(0, 10);

    $scope.getList = function(){
       membershipService.get($scope.startDate, $scope.endDate)
        .success(function(result) {
          // since the request is being done outside angular framework, we need to execute $apply to rebind data
          $scope.$apply(function(){
              $scope.results = result.values;
          })
            
         
        });
    };
   
   $scope.getList();

  });