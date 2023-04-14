
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCLU48sofjbOlH2Cl2gsWG2dbts5AS6Z_c",
    authDomain: "curd-4761f.firebaseapp.com",
    projectId: "curd-4761f",
    storageBucket: "curd-4761f.appspot.com",
    messagingSenderId: "477395250862",
    appId: "1:477395250862:web:d0936b6686cd2f9a2d873f"
  };

  export  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);