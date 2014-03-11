angular.module('out.services', [])

/**
 * ...by any other name,
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

  // return {
  //   promise: promise,
  //   setForecast: function (data) {
  //     forecast = data;
  //   },
  //   all: function() {
  //     return forecast.list;
  //   },
  //   dayAtIndex: function(i) {
  //     return forecast.list[i];
  //   }
  // }
});