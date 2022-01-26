
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvLoYbM_r0bs0gM5Rqssearp_BTcWDhoY",
  authDomain: "du-lieu-fa778.firebaseapp.com",
  projectId: "du-lieu-fa778",
  storageBucket: "du-lieu-fa778.appspot.com",
  messagingSenderId: "1006978359441",
  appId: "1:1006978359441:web:0d73102b579f33ae1a1f30",
  measurementId: "G-H963W37MY4"
};

const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);