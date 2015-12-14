var myApp = angular.module('myApp', [
	'ngCookies',
	'angular-jwt',
	'ngRoute',
	'ui.router'
])

.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider) {
	$urlRouterProvider
	.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '/home',
		controller: 'homeController'
	})
	.state('home.tictactoe', {
		url: 'tic-tac-toe',
		templateUrl: '/tic-tac-toe',
		controller: 'ticTacToeController'
	});

}]);