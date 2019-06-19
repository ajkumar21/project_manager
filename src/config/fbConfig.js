import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBUsSyZgFGu_R764lcmvE5yLDgOBx0VXw0',
  authDomain: 'aj-project-manager.firebaseapp.com',
  databaseURL: 'https://aj-project-manager.firebaseio.com',
  projectId: 'aj-project-manager',
  storageBucket: 'aj-project-manager.appspot.com',
  messagingSenderId: '873133755066',
  appId: '1:873133755066:web:82cad4bd0edec34e'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
