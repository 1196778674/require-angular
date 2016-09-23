'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.factory('displayTemplate', ['$http',function ($http) {
		var displayTemplate = function(templateId,url,callback){
			$http.get(url).success(function(data){
				callback(data);
			});
		}

		return {
			displayTemplate: displayTemplate
		};
	}])
});
