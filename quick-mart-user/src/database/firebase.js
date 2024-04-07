import firebase from 'firebase/compat/app'; // Update import statement
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Update import statement
import 'firebase/compat/storage'; // Update import stat

const firebaseConfig = {
    apiKey: "AIzaSyBL3UkbSU022prpYJNXnfgdGskP9FbXmcA",
    authDomain: "quickmart-01312003.firebaseapp.com",
    databaseURL: "https://quickmart-01312003-default-rtdb.firebaseio.com",
    projectId: "quickmart-01312003",
    storageBucket: "quickmart-01312003.appspot.com",
    messagingSenderId: "88706522692",
    appId: "1:88706522692:web:272023e4774a46657ae611",
    measurementId: "G-1DF5B0D1XB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();