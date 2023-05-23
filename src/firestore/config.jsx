// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmI1MuvSeNwcSdahEZY4e6l97BdaiBhk",
  authDomain: "react-http-b57fe.firebaseapp.com",
  databaseURL: "https://react-http-b57fe-default-rtdb.firebaseio.com",
  projectId: "react-http-b57fe",
  storageBucket: "react-http-b57fe.appspot.com",
  messagingSenderId: "548352601601",
  appId: "1:548352601601:web:957c506758e7e75b485a00",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

export { db };
