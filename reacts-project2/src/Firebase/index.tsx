import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAZGawRqfgiuEOr02uAlA2CNSGNf8xLNpg",
  authDomain: "react-f4d2f.firebaseapp.com",
  projectId: "react-f4d2f",
  storageBucket: "react-f4d2f.appspot.com",
  messagingSenderId: "122413799539",
  appId: "1:122413799539:web:ba66a02009bf4fb84db206",
  measurementId: "G-82VEH60LGE",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
