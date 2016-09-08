'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.factory('HttpGet', ['$http',function ($http) {
		var httpgetlist = function(url,callback){
			$http.get(url).success(function(data){
				callback(data);
			});
		}

		return {
			httpgetlist: httpgetlist
		};
	}])
});
