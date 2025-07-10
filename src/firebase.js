import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0JSJn6QiYt7-r7pjCzDvFk0l9cqln1Io",
  authDomain: "social-media-app-d1302.firebaseapp.com",
  projectId: "social-media-app-d1302",
  storageBucket: "social-media-app-d1302.firebasestorage.app",
  messagingSenderId: "234217506932",
  appId: "1:234217506932:web:0fc3b2ecb5a7c37c866921"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);