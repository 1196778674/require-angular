'use strict';
define([
	'services/dependencyResolverFor',
	'i18n/i18nLoader!',
	'angular',
	'ui-router',
	'bootstrap',
	'angular-translate'],
	function(config, dependencyResolverFor, i18n) {
		var adminApp = angular.module('adminApp', [
			'ui.router',
			'pascalprecht.translate'
		]);
		adminApp
			.config(
				['$stateProvider',
				'$urlRouterProvider',
				'$controllerProvider',
				'$compileProvider',
				'$filterProvider',
				'$provide',
				'$translateProvider',
				function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $translateProvider) {

					adminApp.controller = $controllerProvider.register;
					adminApp.directive = $compileProvider.directive;
					adminApp.filter = $filterProvider.register;
					adminApp.factory = $provide.factory;
					adminApp.service = $provide.service;

					$urlRouterProvider.otherwise('/index');
		            $stateProvider
		                .state('index', {
		                    url: '/index',
		                    views: {
		                        '': {
		                            templateUrl: 'views/home.html'
		                        },
		                        // 'header@index': {
		                        //     templateUrl: 'views/partials/header.html'
		                        // },
		                        // 'left@index': {
		                        //     templateUrl: 'views/partials/left.html'
		                        // },
		                        // 'main@index': {
		                        //     templateUrl: 'views/partials/right.html'
		                        // }
		                    }
		                })
				}]);
		return adminApp;
	}
);
