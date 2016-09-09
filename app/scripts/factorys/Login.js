'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.factory('Login', ['$http','$window',function ($http,$window) {
		var login = function(scope){
			$http.get('../../json/login.json').success(function(data){
				if (data == 'true') {
					scope.user = "刘飞";
					if ($window.location.hash == '#/login') {
						$window.location = '#/index';
					};
				} else {
					$window.location = '#/login';
				};
			});
		}

		return {
			login: login
		};
	}])
});
