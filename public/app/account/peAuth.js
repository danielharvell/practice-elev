angular.module('app').factory('peAuth', function($http, peIdentity, $q, peUser){
    return {
        authenticateUser: function(username, password){
            var dfd = $q.defer();
            $http.post('/login', {username:username, password: password}).then(function(response) {
                if(response.data.success) {
                    var user = new peUser();
                    angular.extend(user, response.data.user);
                    peIdentity.currentUser = user;
                    dfd.resolve(true);
                }else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },

        createUser: function(newUserData) {
            var newUser = new peUser(newUserData);
            var dfd = $q.defer();
            newUser.$save().then(function(){
                peIdentity.currentUser = newUser;
                dfd.resolve();
            }, function(response){
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentUser: function(newUserData){
            var dfd = $q.defer();

            var clone = angular.copy(peIdentity.currentUser);
            angular.extend(clone, newUserData);
            clone.$update().then(function(){
                peIdentity.currentUser = clone;
                dfd.resolve();
            }, function(response){
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        logoutUser: function(){
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function(){
                peIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizedCurrentUserForRoute: function(role){
            if(peIdentity.isAuthorized(role)){
                return true;
            } else{
                return $q.reject('not authorized');
            }
        },
        authorizeAuthenticatedUserForRoute: function(){
            if(peIdentity.isAuthenticated()){
                return true;
            } else{
                return $q.reject('not authorized');
            }
        }
    }
});
