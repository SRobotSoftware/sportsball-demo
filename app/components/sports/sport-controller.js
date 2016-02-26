app.controller('SportController', function ($scope, $stateParams, DataFactory) {

	// Vars
	var vm = this;
	DataFactory.Room.findAll({where: {sportId: $stateParams.sportId}});
	DataFactory.Room.bindAll({where: {sportId: $stateParams.sportId}}, $scope, 'rooms');

	// Public Functions
	DataFactory.Sport.find($stateParams.sportId).then(function (sport) {
		vm.sport = sport;
	}).catch(function (res) { console.log(res) });



	vm.addRoom = function () {
		vm.newRoom.sportId = vm.sport.id;
		DataFactory.Room.create(vm.newRoom);
		vm.newRoom = {};
	}

	vm.edit = function (room) {
	}

	vm.remove = function (room) {
		room.DSDestroy();
	}



});