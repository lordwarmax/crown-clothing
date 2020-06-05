import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_ITYP3o2k2mgsSbmr0K6Dsa19Vor-BOg",
    authDomain: "crown-db-6ae55.firebaseapp.com",
    databaseURL: "https://crown-db-6ae55.firebaseio.com",
    projectId: "crown-db-6ae55",
    storageBucket: "crown-db-6ae55.appspot.com",
    messagingSenderId: "5674677256",
    appId: "1:5674677256:web:1a28f7d2772897995b8dbd",
    measurementId: "G-78JV5YHHMS"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;