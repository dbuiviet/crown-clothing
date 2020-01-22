import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDt0ispMg8CjmirumHYYIrjgNl9u7HZ8T4",
  authDomain: "crown-db-86c6f.firebaseapp.com",
  databaseURL: "https://crown-db-86c6f.firebaseio.com",
  projectId: "crown-db-86c6f",
  storageBucket: "crown-db-86c6f.appspot.com",
  messagingSenderId: "163478799921",
  appId: "1:163478799921:web:70a92734b1369f495f7710",
  measurementId: "G-CPN0MZHSGY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating users", error.message());
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
