(function (window, angular) {

	var aahho = angular.module("aahhoSite", ['ngRoute']);

	var tmpUrl = './assets/views/';

	aahho.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
		// $locationProvider.html5Mode(true).hashPrefix('!');

		$routeProvider
		.when('/home', {
			templateUrl: tmpUrl + 'home.html',
			controller: 'homeController'
		})
		.when('/team', {
			templateUrl: tmpUrl + 'team.html',
			controller: 'teamController'
		})
		.when('/experience', {
			templateUrl: tmpUrl + 'experience.html',
			controller: 'expController'
		});
	}]);

	aahho.controller('sidebarController', [function () {
		this.sidebarItems = [
			{
				href: '/home',
				isActive: true,
				iconName: '',
				title: 'Home'
			},
			{
				href: '/team',
				isActive: false,
				iconName: '',
				title: 'Team'
			},
			{
				href: '/experience',
				isActive: false,
				iconName: '',
				title: 'Experience'
			}
		];
	}]);

	aahho.controller('homeController', ['$scope', function ($scope) {

	}]);

	aahho.controller('teamController', ['$scope', function ($scope) {

	}]);
	
	aahho.controller('expController', ['$scope', function ($scope) {

	}]);

}(window, angular));