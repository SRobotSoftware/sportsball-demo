var app = angular.module('MYMODULE', ['ui.router', 'js-data']);

app.run(function (DS, DSFirebaseAdapter) {

	// JS-data Firebase config
	DS.adapters.firebase === DSFirebaseAdapter; // Is this line needed?
	DS.registerAdapter('firebase', DSFirebaseAdapter, { default: true });

});