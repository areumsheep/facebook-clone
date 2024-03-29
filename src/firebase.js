import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_i_zqroGAucvf9y1pBI4_zepW35UwQII",
    authDomain: "facebook-clone-26872.firebaseapp.com",
    databaseURL: "https://facebook-clone-26872.firebaseio.com",
    projectId: "facebook-clone-26872",
    storageBucket: "facebook-clone-26872.appspot.com",
    messagingSenderId: "92562347021",
    appId: "1:92562347021:web:d272aca27a360a3413b144",
    measurementId: "G-F2YF1L6K1Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;