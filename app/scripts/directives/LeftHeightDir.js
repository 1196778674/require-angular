'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.directive('leftheight', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				var height = $(window).height();
				scope.height = height - 53;
			}
		};
	}])
});
