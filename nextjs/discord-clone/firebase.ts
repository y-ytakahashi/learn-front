import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd9oMI3Pz9HXN5pGB0rQvbyCJCwxq4TMw",
  authDomain: "discord-clone-udemy-14e8a.firebaseapp.com",
  projectId: "discord-clone-udemy-14e8a",
  storageBucket: "discord-clone-udemy-14e8a.appspot.com",
  messagingSenderId: "1050606903045",
  appId: "1:1050606903045:web:9e9e0737f78886730de16c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  db,
  auth,
  provider
}