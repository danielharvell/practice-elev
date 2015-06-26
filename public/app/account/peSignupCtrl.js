angular.module('app').controller('peSignupCtrl', function($scope, peUser, peNotifier, $location, peAuth){
    $scope.signup = function(){
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        peAuth.createUser(newUserData).then(function () {
            peNotifier.notify('User account created!');
            $location.path('/');
        }, function(reason){
            peNotifier.error(reason);
        })
    };
});
