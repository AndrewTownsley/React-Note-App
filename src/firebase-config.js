import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQGE7xOhA3M2WXm_m-CrmztwT0ScGWAXg",
    authDomain: "notes-app-6e63d.firebaseapp.com",
    projectId: "notes-app-6e63d",
    storageBucket: "notes-app-6e63d.appspot.com",
    messagingSenderId: "490206873493",
    appId: "1:490206873493:web:70fd6944498f6014c2189c",
    measurementId: "G-K7RQ8NX2ZK"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
