'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.directive('getuser', ['$http',function ($http) {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				$http.get('../../json/user.json').success(function(data){
					scope.user = data.username;
				})
			}
		};
	}])
});
