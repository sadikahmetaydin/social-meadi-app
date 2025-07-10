import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "social-media-app-d1302.firebaseapp.com",
  projectId: "social-media-app-d1302",
  storageBucket: "social-media-app-d1302.firebasestorage.app",
  messagingSenderId: "234217506932",
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);