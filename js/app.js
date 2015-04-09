'use strict'

var dronologijaApp = angular.module('dronologijaApp', [
    'ngRoute',
    'dronologijaControllers',
    'dronologijaServices'
]);

dronologijaApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/ponude', {
                templateUrl: 'partials/offers.html',
                controller: 'offersCtrl'
            }).
            when('/ponude/:ponudaId', {
                templateUrl: 'partials/offer-detail.html',
                controller: 'offerDetailCtrl'
            }).
            otherwise({
                redirectTo: '/ponude'
            });
        }]);