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

	adminApp.directive('mainwidth', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				var width = $('body').width();
				scope.width = width - 100;
			}
		};
	}])
});
