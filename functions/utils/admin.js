const admin = require('firebase-admin');
var serviceAccount = require('../secrets/serviceAccountKey.json');

// initialize app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

module.exports = { admin, db };
