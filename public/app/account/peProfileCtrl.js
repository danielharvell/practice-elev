angular.module('app').controller('peProfileCtrl', function ($scope, peAuth, peIdentity, peNotifier) {
    $scope.email = peIdentity.currentUser.username,
    $scope.fname = peIdentity.currentUser.firstName,
    $scope.lname = peIdentity.currentUser.lastName,

    $scope.update = function() {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        peAuth.updateCurrentUser(newUserData).then(function(){
            peNotifier.notify('Your user account has been updated');
        }, function(reason){
            peNotifier.error(reason);
        })
    }
});
