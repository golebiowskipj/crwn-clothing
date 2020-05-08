import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCZBrkwrEm9i3mRzgb9Wx1Lrhekn85prGc",
    authDomain: "crwn-db-658ff.firebaseapp.com",
    databaseURL: "https://crwn-db-658ff.firebaseio.com",
    projectId: "crwn-db-658ff",
    storageBucket: "crwn-db-658ff.appspot.com",
    messagingSenderId: "910023133353",
    appId: "1:910023133353:web:54f79eb0e2c498a3df81b8",
    measurementId: "G-0C5DC7542L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export default firebase;
