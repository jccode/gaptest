
angular.module('gaptest', ['ui.router', 'ngTouch', 'ngSanitize', 'mobile-angular-ui', 'ui.bootstrap' ]) 

    .constant("_", window._)

    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

        $rootScope.$on('deviceready', function(e) {
            console.log('bootstrap');

            window.plugin.notification.local.add({
                id: 1,
                title: "GAP Test", 
                message: "device ready trigger inside angular."
            });
            console.log('device ready trigger inside angular.');
            
        });
    }])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // $stateProvider
        //     .state('home', {
        //     })

        $urlRouterProvider.otherwise('/');
    }])
;

