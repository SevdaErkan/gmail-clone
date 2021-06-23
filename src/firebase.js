import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA2p2Lfrs91yaTPQXRL9nLKgYw3SNezPeI',
	authDomain: 'g-clone-5832f.firebaseapp.com',
	projectId: 'g-clone-5832f',
	storageBucket: 'g-clone-5832f.appspot.com',
	messagingSenderId: '999454856220',
	appId: '1:999454856220:web:573da8b78c2acf1c29fbd9',
	measurementId: 'G-ZZ0P7Z012W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
