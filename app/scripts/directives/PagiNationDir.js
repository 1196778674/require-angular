'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.directive('pagination', ['HttpGet', function (HttpGet) {
		return {
			priority: 0,
			templateUrl: './views/template/pagination.html',
			replace: true,
			restrict: 'EA',
			controller: function($scope, $element, $attrs, $transclude) {
				HttpGet.httpgetlist('../../json/page.json',function(data){
					$scope.pagination = data;
				});
			},
			link: function (scope, iElement, iAttrs) {
				$(iElement).on('click', 'a', function(e) {
					console.log($(e.target).data('href'));
				});
			}
		};
	}])
});