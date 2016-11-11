angular.module('app').controller('productsCtrl', function($scope, $stateParams, $http) {

    // Bind the productId and URL
    $scope.productId = $stateParams.id;
    // This function retrieves a single product
    // based on the URL parameter
    $scope.getSingleProduct = function() {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/' + $scope.productId,
        }).then(function(response) {
            $scope.productInfo = response;
        })
    };

});
