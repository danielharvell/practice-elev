angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    var routeRoleChecks = {
        admin: {auth: function(peAuth) {
            return peAuth.authorizedCurrentUserForRoute('admin')
        }},
        user: {auth: function(peAuth) {
            return peAuth.authorizeAuthenticatedUserForRoute()
        }}
    }

    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
        .when('/', {templateUrl: '/partials/main/main', controller: 'peMainCtrl'})
        .when('/admin/users', {templateUrl: '/partials/admin/user-list',
            controller: 'peUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', {templateUrl: '/partials/account/signup',
            controller: 'peSignupCtrl'})
        .when('/profile', {templateUrl: '/partials/account/profile',
            controller: 'peProfileCtrl', resolve: routeRoleChecks.user});
});

angular.module('app').run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
        if(rejection === 'not authorized'){
            $location.path('/')
        }
    })
})