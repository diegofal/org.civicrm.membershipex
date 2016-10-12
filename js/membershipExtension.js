(function(angular, $, _) {

  var resourceUrl = CRM.resourceUrls['org.civicrm.angularex'];
  var app = angular.module('membershipExtension', ['ngRoute', 'crmResource']);

  app.factory('membershipService', function() {
   var membershipServiceFactory = {};

    function get(startDate, endDate, limit) {
        return CRM.api3('Membership', 'get', {
          "sequential": 1,
          "return": ["contact_id.display_name"],
          "options": {"limit":limit},
          "start_date": {">=":startDate},
          "start_date": {"<=":endDate}
        })  
    }

    membershipServiceFactory.get = get;

    //public API
    return membershipServiceFactory;
  } );

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/membersExtension', {
        templateUrl: '~/membershipExtension/membershipExtension.html',
        controller: 'MembershipExtensionCtrl'
      });
    }
  ]);

  app.controller('MembershipExtensionCtrl', function($scope, membershipService) {
    //$scope.ts = CRM.ts('org.tst.angularMembers');
    $scope.results = [];
    $scope.startDate = '1900-01-01';
    $scope.endDate = new Date().toISOString().slice(0, 10);

    $scope.getList = function() {
      membershipService.get($scope.startDate, $scope.endDate)
        .success(function(result) {
          // since the request is being done outside angular framework, we need to execute $apply to rebind data
          $scope.$apply(function(){
              $scope.results = result.values;
          })
            
         
        });
    }
   
   $scope.getList();

  });




})(angular, CRM.$, CRM._);