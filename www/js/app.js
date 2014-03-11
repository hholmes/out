// Out

angular.module('out', ['ionic', 'out.services', 'out.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('fiveDayForecast', {
      url: "/",
      templateUrl: "templates/fiveDayForecast.html",
      controller: 'FiveDayForecastCtrl'
    });


  // fallback
  $urlRouterProvider.otherwise('/');

/*

// SEE controller to-do

    .state('loading', {
      url: "/loading",
      templateUrl: "index.html",
      controller: 'LoadingCtrl'
    })
*/

});