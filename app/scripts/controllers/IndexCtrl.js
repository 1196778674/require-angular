'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.controller('IndexCtrl', ['$scope','HttpGet',function($scope,HttpGet) {

		HttpGet.httpgetlist('../../json/index.json',function(data){
			$scope.welcomeText = data;
		});
	}]);
});
