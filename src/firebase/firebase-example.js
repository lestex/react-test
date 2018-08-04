import * as firebase from 'firebase';

const config = {
    apiKey: "xxxxxxxxxxxxx",
    authDomain: "xxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxx.firebaseio.com",
    projectId: "xxxxxxx",
    storageBucket: "xxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx"
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default }
