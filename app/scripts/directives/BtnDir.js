'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.directive('buttontest', [function () {
		return {
			restrict: 'AE',
			templateUrl: '../views/partials/buttontest.html',
			link: function (scope, iElement, iAttrs) {
				scope.show = function(){
					console.log("1");
				}
			}
		};
	}])
});