angular.module('out.controllers', [])

.controller('FiveDayForecastCtrl', function($scope, FiveDayForecastService) {;

	// After forecast resolves its promise, initialize the scope variable.
	FiveDayForecastService.getForecast().then(function(data){
    $scope.forecast = data.data.list;
  })
})