app.controller('SportController', function ($scope, $stateParams, DataFactory) {
	var vm = this;

	DataFactory.Sport.find($stateParams.sportId).then(function (sport) {
		console.log('SUCCESS');
		vm.sport = sport;
	}).catch(function(res){console.log(res)});


});