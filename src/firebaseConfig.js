import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwiraFHTGJ240TOFmbLkRor45o77VBO-g",
  authDomain: "messenger-project-f9804.firebaseapp.com",
  projectId: "messenger-project-f9804",
  storageBucket: "messenger-project-f9804.appspot.com",
  messagingSenderId: "173922928112",
  appId: "1:173922928112:web:5dc06e96b92e1204994935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); // ✅ Export Database
export const dbFireStore = getFirestore(app); // ✅ Export Firestore