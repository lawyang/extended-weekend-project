const movieApp = angular.module('movieApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate']);

movieApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/genre', {
        templateUrl: '/views/genre.html',
        controller: 'GenreController as GC'
    }).otherwise({
        template: '<h1>404</h1>'
    });
}])