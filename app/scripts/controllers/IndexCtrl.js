'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.controller('IndexCtrl', ['$scope','HttpGet', 'Login',function($scope,HttpGet, Login) {

		Login.login($scope);

		HttpGet.httpgetlist('../../json/index.json',function(data){
			$scope.welcomeText = data;
		});
	}])
	.controller('TestCtrl', function ($scope) {
	    $scope.datePicker = {startDate: null, endDate: null};
	});
});
