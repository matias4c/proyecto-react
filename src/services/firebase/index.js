import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASMfXPQDytBMN7hRzj-JBZoTXZsTlsvAI",
  authDomain: "mcompu-react.firebaseapp.com",
  projectId: "mcompu-react",
  storageBucket: "mcompu-react.appspot.com",
  messagingSenderId: "119010231095",
  appId: "1:119010231095:web:293b941467c48b263090b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);