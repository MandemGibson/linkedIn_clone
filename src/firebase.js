import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBi4wr_r8GoW-8yDwDyp1yVrqtyjknUtE",
  authDomain: "linkedin-clone-7da55.firebaseapp.com",
  projectId: "linkedin-clone-7da55",
  storageBucket: "linkedin-clone-7da55.appspot.com",
  messagingSenderId: "429578095221",
  appId: "1:429578095221:web:59bf4f9212a226a973463c",
  measurementId: "G-WZLV7XJSFR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
