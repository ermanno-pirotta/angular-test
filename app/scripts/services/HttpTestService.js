'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.services:HttpTestService
 * @description
 * # Test service which gets data via an http request,
 * handle the result internally and returns a callback (promise) for external usage.
 */
angular.module('angularTestApp')
  .factory('HttpTestService',['$http','$q', function ($http,$q) {
	var HttpTestService = {};
	HttpTestService.get = function(){
		var deferred = $q.defer();
		/*get some data with an http get*/		
		$http.get("/angularTest/data")
		 success(function(data, status, headers, config) {
   			deferred.resolve(data); 
		 }).
		 error(function(data, status, headers, config) {
    			deferred.reject('HttpTestService error!');
		 });
		return deferred.promise;
	}
	return HttpTestService;
  ]});

