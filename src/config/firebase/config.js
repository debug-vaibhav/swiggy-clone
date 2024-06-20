import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: "AIzaSyD1B4GAAUkMLlA4yhUzrensOfUWAqYzLXo",
  authDomain: "swiggy-clone-c1591.firebaseapp.com",
  databaseURL:
    "https://swiggy-clone-c1591-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "swiggy-clone-c1591",
  storageBucket: "swiggy-clone-c1591.appspot.com",
  messagingSenderId: "63245825626",
  appId: "1:63245825626:web:1b5aea89b562eb9c8d4a63",
};

export const firbaseApp = initializeApp(firebaseConfig);
export const firestoreDatabase = getFirestore(firbaseApp);
export const firestoreAuthentication = getAuth(firbaseApp);
export const firestoreMessaging = getMessaging(firbaseApp);
