app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'log_in.html',
            controller: 'homeCtrl'
        })

    .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: 'contactCtrl'
    })

    .state('edit', {
        url: '/edit',
        templateUrl: 'edit_form.html',
        controller: 'editCtrl'

    })

    .state('view', {
        url: '/view',
        templateUrl: 'view.html',
        controller: 'viewCtrl'

    })

    .state('create', {
        url: '/create',
        templateUrl: 'create.html',
        controller: 'createCtrl'

    })
}]);