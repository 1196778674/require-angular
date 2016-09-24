'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.controller('IndexCtrl', ['$scope','HttpGet', 'Login',function($scope,HttpGet, Login) {

		Login.login($scope);

		HttpGet.httpgetlist('../../json/index.json',function(data){
			$scope.welcomeText = data;
		});
		HttpGet.httpgetlist('../../json/userlist1.json',function(data){
			$scope.userList = data;
		});
	}])
	.controller('datepickerCtrl', function ($scope) {
	    $scope.datePicker = {startDate: '2015-4-5', endDate: '2015-5-6'};
	});
});
