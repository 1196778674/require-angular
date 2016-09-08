'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.directive('text', [function () {
		return {
			template: '<div>indexdir</div>',
			replace: true,
			restrict: 'AE',
			link: function postLink(scope, iElement, iAttrs) {

			}
		};
	}])
});
