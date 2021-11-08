// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA10oBv4jY1KUQkH5YVLkCzlTP8UKcnemE",
    authDomain: "bookshelf-41812.firebaseapp.com",
    projectId: "bookshelf-41812",
    storageBucket: "bookshelf-41812.appspot.com",
    messagingSenderId: "54297579986",
    appId: "1:54297579986:web:1828c64d185da534f4f80b",
    measurementId: "G-C8XJQ2214X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;