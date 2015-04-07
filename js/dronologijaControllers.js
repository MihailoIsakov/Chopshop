'use strict'

var dronologijaControllers = angular.module('dronologijaControllers', []);

dronologijaControllers.controller('offersCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/offers.json').success(function (data) {
            $scope.offers = data;
            $scope.offersOreder = 'age';
        });
    }]);


