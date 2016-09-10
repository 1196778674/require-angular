'use strict';
define(['adminApp'], function(adminApp) {

	adminApp.controller('LoginCtrl', ['$scope','$http','Login',function($scope,$http,Login) {

		Login.login($scope);

		$scope.login =  function(){
        	$http.get('../../json/login.json').success(function(data){
        		if (data == 'true') {
        			window.location = '#/index';
        		} else {
        			window.location = '#/login';
        		};
        	})
        }

	}]);
});
