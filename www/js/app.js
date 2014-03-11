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

});