'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.directive('getuser', ['$http',function ($http) {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				$http.get('../../json/login.json').success(function(){
					scope.user = "刘飞";
				})
			}
		};
	}])
});
