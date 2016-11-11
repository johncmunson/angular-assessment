angular.module('app').directive('product', function() {

    return {
        templateUrl: 'views/product-tmpl.html',
        // Create an isolated scope
        // using '@' for one-way binding
        scope: {
            image: '@image',
            id: '@identity',
            title: '@title',
            price: '@price',
            desc: '@desc'
        },
        controller: function($scope) {
            // Enable toggling of image and link
            $scope.imageHidden = true;
            $scope.linkHidden = false;
        },
    };

});
