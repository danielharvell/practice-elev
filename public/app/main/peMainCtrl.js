angular.module('app').controller('peMainCtrl', function($scope){

    $scope.courses = [
        {name: 'Course 1', featured: true, published: new Date('01/01/2015 08:01 PM')},
        {name: 'Course 2', featured: true, published: new Date('01/02/2015 08:01 PM')},
        {name: 'Course 3', featured: true, published: new Date('01/03/2015 08:01 PM')},
        {name: 'Course 4', featured: true, published: new Date('01/04/2015 08:01 PM')},
        {name: 'Course 5', featured: true, published: new Date('01/05/2015 08:01 PM')},
        {name: 'Course 6', featured: true, published: new Date('01/06/2015 08:01 PM')},
        {name: 'Course 7', featured: true, published: new Date('01/07/2015 08:01 PM')},
        {name: 'Course 8', featured: true, published: new Date('01/08/2015 08:01 PM')},
        {name: 'Course 9', featured: true, published: new Date('01/09/2015 08:01 PM')},
        {name: 'Course 10', featured: true, published: new Date('01/10/2015 08:01 PM')}
    ]

});
