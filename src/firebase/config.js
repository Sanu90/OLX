import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKTfGt_8Udg73AMnWL-5BDcYeXhOerh0I",
  authDomain: "olx-clone-57467.firebaseapp.com",
  projectId: "olx-clone-57467",
  storageBucket: "olx-clone-57467.appspot.com",
  messagingSenderId: "946021065893",
  appId: "1:946021065893:web:3a4c1a7b50a9fce1d4194c",
};

const firebase = initializeApp(firebaseConfig);

export { firebase };
