// Out

// 'dailyView.services' is found in services.js
// 'dailyView.controllers' is found in controllers.js
angular.module('out', ['ionic', 'out.services', 'out.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('dailyView', {
      url: "/",
      templateUrl: "templates/dailyView.html",
      controller: 'DailyViewCtrl'
    });

    // .state('dailyView', {
    //   url: "/",
    //   templateUrl: "templates/dailyView.html",
    //   controller: 'DailyViewCtrl',
    //   resolve: {
    //     forecast: function(FiveDayForecastService) {
    //       return FiveDayForecastService.forecast();
    //     }
    //   }
    // });

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/');

/*

    .state('loading', {
      url: "/loading",
      templateUrl: "index.html",
      controller: 'LoadingCtrl'
    })
*/

});