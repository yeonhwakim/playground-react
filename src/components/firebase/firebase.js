import firebase from "firebase/compat/app";

const firebaseConfig = {};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app({});
