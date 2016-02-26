app.config(function ($stateProvider, $urlRouterProvider) {

	var base = 'app/components/';

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: base + 'home/home.html',
			controller: 'HomeController',
			controllerAs: 'hc'
		})
		.state('sports', {
			url: '/sports',
			templateUrl: base + 'sports/sports.html',
			controller: 'SportsController',
			controllerAs: 'sc'
		})
		.state('sport', {
			url: '/sports/:sportId',
			templateUrl: base + 'sports/sport.html',
			controller: 'SportController',
			controllerAs: 'sc',
		})
		.state('rooms', {
			abstract: true,
			url: '/sports/:sportId/room/:roomId',
			template: '<ui-view></ui-view>',
		})
		.state('rooms.room', {
			url: '',
			templateUrl: base + 'room/room.html',
			controller: 'RoomController',
			controllerAs: 'rc'
		})

});