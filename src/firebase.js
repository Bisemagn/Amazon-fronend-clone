import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//Solution for:
//  Module not found: Error: Package path . is not exported from package:

/* https://stackoverflow.com/questions/70445014/module-not-found-error-package-path-is-not-exported-from-package
 */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj1xRVvpCqpVRLosd7zltRgzsGr8GFGhI",
  authDomain: "front-end-bisie.firebaseapp.com",
  projectId: "front-end-bisie",
  storageBucket: "front-end-bisie.appspot.com",
  messagingSenderId: "733866877843",
  appId: "1:733866877843:web:69c41b6beb6a2cfb093e66",
  measurementId: "G-BH8QT0QC5Q",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
