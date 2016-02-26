// JS-data Firebase config
app.config(function (DSFirebaseAdapterProvider) {
	DSFirebaseAdapterProvider.defaults.basePath = 'https://pfefferi.firebaseio.com/';
	DSFirebaseAdapterProvider.defaults.bypassCache = true;
});