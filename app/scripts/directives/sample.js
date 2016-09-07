'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.directive('sample', function() {
		return {
			restrict: 'E',
			template: '<span>Sample</span>'
		};
	});
});
