// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDsmvYlHPN8HxmLaTlou9d9RSQHv6pY33c',
    authDomain: 'curumim-viajante.firebaseapp.com',
    databaseURL: 'https://curumim-viajante.firebaseio.com',
    projectId: 'curumim-viajante',
    storageBucket: 'curumim-viajante.appspot.com',
    messagingSenderId: '703647880654',
    timestampsInSnapshots: true
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
