'use strict'

var dronologijaApp = angular.module('dronologijaApp', [
    'ngRoute',
    'dronologijaControllers'
    //'dronologijaServices'
]);

dronologijaApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/ponude', {
                templateUrl: 'partials/offers.html',
                controller: 'offersCtrl'
            }).
            otherwise({
                redirectTo: '/ponude'
            });
        }]);