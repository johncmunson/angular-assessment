angular.module('app').controller('mainCtrl', function($scope, mainSrvc) {

    $scope.getProducts = function() {
        mainSrvc.getProducts().then(function(response) {
            $scope.products = response;
        });
    }
    $scope.getProducts();

})
