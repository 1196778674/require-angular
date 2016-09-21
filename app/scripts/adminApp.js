'use strict';
define([
	'services/dependencyResolverFor',
	'i18n/i18nLoader!',
	'angular',
	'ui-router',
	'bootstrap',
	'angular-daterangepicker',
	'zh-cn',
	'angular-translate'],
	function(config, dependencyResolverFor, i18n) {
		var adminApp = angular.module('adminApp', [
			'ui.router',
			'pascalprecht.translate',
			'daterangepicker'
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
		            	.state('login',{
		                	url: '/login',
		                	views: {
		                		'': {
				                    templateUrl: 'views/login.html'
				                }
		                	}
		                })
		                .state('index', {
		                    url: '/index',
		                    views: {
		                        '': {
		                            templateUrl: 'views/home.html'
		                        },
		                        'header@index': {
		                            templateUrl: 'views/partials/header.html'
		                        },
		                        'left@index': {
		                            templateUrl: 'views/partials/left.html'
		                        },
		                        'main@index': {
		                            templateUrl: 'views/partials/main.html'
		                        }
		                    }
		                })
		                .state('index.storemanagement',{
		                	url: '/storemanagement',
		                	views: {
		                		'main@index': {
				                    templateUrl: 'views/storemanagement/storemanagement.html'
				                }
		                	}
		                })
		                .state('index.contractedstores',{
		                	url: '/contractedstores',
		                	views: {
		                		'main@index': {
				                    templateUrl: 'views/contractedstores/contractedstores.html'
				                }
		                	}
		                })
		                .state('index.datastatistics',{
		                	url: '/datastatistics',
		                	views: {
		                		'main@index': {
				                    templateUrl: 'views/datastatistics/datastatistics.html'
				                }
		                	}
		                })
		                .state('index.changepass',{
		                	url: '/changepassword',
		                	views: {
		                		'main@index': {
				                    templateUrl: 'views/usercenter/changepass.html'
				                }
		                	}
		                })
		                .state('index.usercenter',{
		                	url: '/usercenter',
		                	views: {
		                		'main@index': {
				                    templateUrl: 'views/usercenter/usercenter.html'
				                }
		                	}
		                })
				}]);
		return adminApp;
	}
);
