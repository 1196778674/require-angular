'use strict';
define(['cpx-admin'], function(cpx-admin) {

	cpx-admin.directive('sample', function() {
		return {
			restrict: 'E',
			template: '<span>Sample</span>'
		};
	});
});
