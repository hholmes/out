angular.module('out.services', [])

/**
 * Queries the Open Weather api for the 5 day forecast.
 */
.factory('FiveDayForecastService', function($q, $http) {

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