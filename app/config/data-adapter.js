// JS-data Firebase config
app.config(function (DSFirebaseAdapterProvider) {
	DSFirebaseAdapterProvider.defaults.basePath = 'https://pfefferi.firebaseio.com/';
	DSFirebaseAdapterProvider.defaults.bypassCache = true;
});

app.run(function (DS, DSFirebaseAdapter) {
	DS.adapters.firebase === DSFirebaseAdapter;
	DS.registerADapter('firebase', DSFirebaseAdapter, { default: true });
});