'use strict';
define(['routes',
	'services/dependencyResolverFor',
	'i18n/i18nLoader!',
	'angular',
	'angular-route',
	'bootstrap',
	'angular-translate'],
	function(config, dependencyResolverFor, i18n) {
		var cpx-admin = angular.module('cpx-admin', [
			'ngRoute',
			'pascalprecht.translate'
		]);
		cpx-admin
			.config(
				['$routeProvider',
				'$controllerProvider',
				'$compileProvider',
				'$filterProvider',
				'$provide',
				'$translateProvider',
				function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $translateProvider) {

					cpx-admin.controller = $controllerProvider.register;
					cpx-admin.directive = $compileProvider.directive;
					cpx-admin.filter = $filterProvider.register;
					cpx-admin.factory = $provide.factory;
					cpx-admin.service = $provide.service;

					if (config.routes !== undefined) {
						angular.forEach(config.routes, function(route, path) {
							$routeProvider.when(path, {templateUrl: route.templateUrl, resolve: dependencyResolverFor(['controllers/' + route.controller]), controller: route.controller, gaPageTitle: route.gaPageTitle});
						});
					}
					if (config.defaultRoutePath !== undefined) {
						$routeProvider.otherwise({redirectTo: config.defaultRoutePath});
					}

					$translateProvider.translations('preferredLanguage', i18n);
					$translateProvider.preferredLanguage('preferredLanguage');
				}]);
		return cpx-admin;
	}
);
