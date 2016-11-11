angular.module('app').service('mainSrvc', function($http, $q) {

    this.getProducts = function() {
        return $http({
            method: GET,
            url: 'http://practiceapi.devmounta.in/products'
        }).then(function(response) {
            return response;
        })
    }

})
