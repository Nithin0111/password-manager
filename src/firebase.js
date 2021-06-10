import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXcrTkZ8m5JhmH5_O8Wf3MkOAwFM7UPq0",
  authDomain: "nsp-pwd-manager.firebaseapp.com",
  projectId: "nsp-pwd-manager",
  storageBucket: "nsp-pwd-manager.appspot.com",
  messagingSenderId: "713901976044",
  appId: "1:713901976044:web:f276efe8e2572c0e6338c9",
  measurementId: "G-EKMCQDH51C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
