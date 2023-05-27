import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtsATh_LOEhCCFYW7jiHGi2cBvvqQEkPg",
  authDomain: "netflix-clone-f7b02.firebaseapp.com",
  projectId: "netflix-clone-f7b02",
  storageBucket: "netflix-clone-f7b02.appspot.com",
  messagingSenderId: "412117040741",
  appId: "1:412117040741:web:6b569cf6a3acb3ca50108c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
