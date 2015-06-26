angular.module('app').factory('peIdentity', function($window, peUser){
    var currentUser;
    if(!!$window.bootstrappedUserObject){
        currentUser = new peUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function(){
            return !!this.currentUser;
        },
        isAuthorized: function(role){
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1
        }
    }
});
