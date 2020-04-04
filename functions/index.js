const functions = require('firebase-functions');
const firebase = require('firebase');
const app = require('express')();

const firebaseConfig = require('./secrets/firebaseConfig');
firebase.initializeApp(firebaseConfig);

// routes
const users = require('./api/users');

app.post('/sign_up', users.signUp);

exports.api = functions.https.onRequest(app);
