// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCN8LYQ3iKI9ploeHF2Nm7DcCz5udrbqEM",
  authDomain: "social-app-dfc91.firebaseapp.com",
  projectId: "social-app-dfc91",
  storageBucket: "social-app-dfc91.appspot.com",
  messagingSenderId: "88517874798",
  appId: "1:88517874798:web:e53611c7ff9030c80fc27f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);