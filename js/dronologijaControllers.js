'use strict'

var dronologijaControllers = angular.module('dronologijaControllers', []);

dronologijaControllers.controller('offersCtrl', ['$scope', '$http', 'Categories',
    function($scope, $http, Categories) {
        $http.get('data/offers.json').success(function (data) {
            $scope.offers = data;
            $scope.offersOrder = 'name';
            $scope.categories = Categories.query();
        });

    }]);

dronologijaControllers.controller('offerDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('data/offers/' + $routeParams.ponudaId + '.json').success(function (data) {
            $scope.offer = data;
        });
    }]);

