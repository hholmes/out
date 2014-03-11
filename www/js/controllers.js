angular.module('out.controllers', [])

.controller('DailyViewCtrl', function($scope, FiveDayForecastService) {;

	// Weather Service is assured resolved by this call. (Note route resolve)
	FiveDayForecastService.getForecast().then(function(data){
    $scope.forecast = data.data.list;
  })
})

/*
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