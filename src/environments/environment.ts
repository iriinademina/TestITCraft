// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlAuthConfig: {
    singUP:
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
    signIn:
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
    changePassword:
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key='
},
firebaseConfig: {
    apiKey: "AIzaSyCxrH5g8bISv6U7hAs6NNZU93Ia_2E9L9s",
    authDomain: "itaka-1f0a0.firebaseapp.com",
    databaseURL: "https://itaka-1f0a0.firebaseio.com",
    projectId: "itaka-1f0a0",
    storageBucket: "itaka-1f0a0.appspot.com",
    messagingSenderId: "905538185002",
    appId: "1:905538185002:web:6e79277a7a14ad7e"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
