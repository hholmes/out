angular.module('out.services', [])

/**
 * Queries the Open Weather api for the 5 day forecast.
 */
.factory('FiveDayForecastService', function($q, $http) {

  //TODO: Accomodate weather conditions, 
  //  eg. ".rainy" if dayData.weather[0].main contains the string "Rain"

  //TODO: Variable location: device geolocation or user input

  var getForecast = function() {
    var deferred = $q.defer();

    $http.get(
      'http://api.openweathermap.org/data/2.5/forecast/daily?q=Madison,wi&mode=json&units=imperial&cnt=5'
    ).then(function(data) {
      deferred.resolve(data);
    });
  
      return deferred.promise;
    };
    
    return {
      getForecast: getForecast
    };
});


// TODO: Replace text for "Today" and "Tomorrow" based on date comparison