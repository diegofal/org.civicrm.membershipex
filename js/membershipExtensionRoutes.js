  angular.module('membershipExtension').config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/membersExtension', {
        templateUrl: '~/membershipExtension/membershipExtension.html',
        controller: 'MembershipExtensionCtrl'
      });
    }
  ]);