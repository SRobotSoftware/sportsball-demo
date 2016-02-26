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
			url: '/sports/:sportName',
			templateUrl: base + 'sports/sport.html',
			controller: 'SportController',
			controllerAs: 'sc',
			resolve: {
				sport: function () {
					// GET SPORT AT ID
					// IF NO SPORT REDIRECT TO SPORTS
				}
			}
		})
		.state('teams', {
			url: '/teams',
			templateUrl: base + 'teams/teams.html',
			controller: 'TeamsController',
			controllerAs: 'tc'
		})
		.state('team', {
			url: '/team/:teamId',
			templateUrl: base + 'teams/team.html',
			controller: 'TeamController',
			controllerAs: 'tc',
			resolve: {
				team: function () {
					// GET TEAM AT ID
					// IF NO TEAM REDIRECT TO TEAMS
				}
			}
		});

});