const movieApp = angular.module('movieApp', ['ngRoute']);

movieApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as HC'
    }).when('/genre', {
        templateUrl: '/views/genre.html',
        controller: 'GenreController as GC'
    }).otherwise({
        template: '<h1>404</h1>'
    });
}])