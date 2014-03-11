angular.module('dailyView.services', [])

/**
 * ...by any other name,
 */
.factory('DailyWeatherService', function($http) {
  // TODO: query Open Weather API

  $http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Madison,wi'
    ).success(
      function(data, status, headers, config) {
        console.log(data);
      }
    );


  console.log("daily Weather Service is running.");

  // temporary daily weather forecast data
  var temps = [
      { id:0, day: 'Today', degreesF: '47' },
      { id:1, day: 'Tomorrow', degreesF: '51' },
      { id:2, day: 'Wednesday', degreesF: '57' },
      { id:2, day: 'Thursday', degreesF: '61' }
    ];

  return {
    all: function() {
      console.log("Returning all temps from DailyWeatherService.");
      return temps;
    },
    inNumDays: function(dayOffset) {
      return temps[dayOffset];
    }
  }
});