app.controller('RoomController', function ($scope, $stateParams, DataFactory) {

	// Vars
	var vm = this;
	DataFactory.Room.findAll({where: {roomId: $stateParams.roomId}});
	DataFactory.Room.bindAll({where: {roomId: $stateParams.roomId}}, $scope, 'rooms');

	// Public Functions
	DataFactory.Room.find($stateParams.RoomId).then(function (room) {
		vm.room = room;
	}).catch(function (res) { console.log(res) });

});