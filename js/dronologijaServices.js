'use strict'

//var dronologijaServices = angular.module('dronologijaServices', ['ngResources'])
//
//dronologijaServices.factory('Offers', ['$resource',
//    function($resource) {
//        return $resource('offers/')
//    }])

var dronologijaServices = angular.module('dronologijaServices', ['ngResource']);

dronologijaServices.factory('Categories', ['$resource',
    function($resource) {
        return $resource('data/categories.json', {}, {
            query: {method: 'GET', params: {}, isArray: true}
        });
    }]);
