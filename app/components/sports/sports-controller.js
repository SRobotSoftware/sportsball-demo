app.controller('SportsController', function ($scope, DataFactory) {

	var vm = this;

	vm.addSport = function () {
		DataFactory.Sport.create(vm.newSport);
	}

	DataFactory.Sport.findAll();
	DataFactory.Sport.bindAll({}, $scope, 'sports');

});