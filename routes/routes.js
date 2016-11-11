angular.module('app', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'mainCtrl'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: 'views/shop.html',
                controller: 'mainCtrl'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: 'views/blog.html',
                controller: 'mainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'mainCtrl'
            });
            $urlRouterProvider
                .otherwise('/');

    });
