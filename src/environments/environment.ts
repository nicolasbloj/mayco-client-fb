// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBF2lVqSOvmgJBJbAThNayDTkHhngKTBO4',
    authDomain: 'mayco-backend.firebaseapp.com',
    databaseURL: 'https://mayco-backend.firebaseio.com',
    projectId: 'mayco-backend',
    storageBucket: 'mayco-backend.appspot.com',
    messagingSenderId: '211952405898'
  }
};
