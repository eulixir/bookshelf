// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA10oBv4jY1KUQkH5YVLkCzlTP8UKcnemE",
    authDomain: "bookshelf-41812.firebaseapp.com",
    projectId: "bookshelf-41812",
    storageBucket: "bookshelf-41812.appspot.com",
    messagingSenderId: "54297579986",
    appId: "1:54297579986:web:2b16785a35ef63fff4f80b",
    measurementId: "G-M54BRPE5HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app);

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    signOut(auth);
}

export { firebase, db, auth };