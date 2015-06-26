angular.module('app').controller('peUserListCtrl', function($scope, peUser){
    $scope.users = peUser.query();
});
