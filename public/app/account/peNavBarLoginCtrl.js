angular.module('app').controller('peNavBarLoginCtrl', function($scope, $http, peIdentity, peNotifier, peAuth, $location){
    $scope.identity = peIdentity;
    $scope.signin = function(username, password){
        peAuth.authenticateUser(username, password).then(function(success){
            if(success){
                peNotifier.notify('You have successfully signed in!');
            } else {
                peNotifier.notify('Username/Password combination incorrect.');
            }
        });
    };

    $scope.signout = function(){
        peAuth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            peNotifier.notify('You have successfully signed out!');
            $location.path('/');
        })
    };
});
