angular.module('out.controllers', [])

.controller('FiveDayForecastCtrl', function($scope, FiveDayForecastService) {;

	// After forecast resolves its promise, initialize the scope variable.
	FiveDayForecastService.getForecast().then(function(data){
    $scope.forecast = data.data.list;
  })
})

/*

// TODO: Use Loading controller during data fetch.

.controller('LoadingCtrl', ['$scope', '$ionicLoading', function($scope, $ionicLoading) {

  // Trigger the loading indicator
  $scope.show = function() {

    // Show the loading overlay and text
    $scope.loading = $ionicLoading.show({

      // The text to display in the loading indicator
      content: 'Loading',

      // The animation to use
      animation: 'fade-in',

      // Will a dark overlay or backdrop cover the entire view
      showBackdrop: true,

      // The maximum width of the loading indicator
      // Text will be wrapped if longer than maxWidth
      maxWidth: 200,

      // The delay in showing the indicator
      showDelay: 500
    });
  };

  // Hide the loading indicator
  $scope.hide = function(){
    $scope.loading.hide();
  };
}]);
*/