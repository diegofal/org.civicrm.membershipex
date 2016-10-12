angular.module('membershipExtension').factory('membershipService', function() {
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

    return membershipServiceFactory;
  });