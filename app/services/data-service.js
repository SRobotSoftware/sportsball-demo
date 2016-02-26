app.factory('DataFactory', function (DS) {

	var DataFactory = {

	};

	return DataFactory;

	function Sport() {
		return DS.defineResource({
			name: 'sport',
			endpoint: 'sports',
			relations: {
				hasMany: {
					rooms: {
						localField: 'rooms',
						foreignKey: 'roomId'
					}
				}
			}
		});
	}

});