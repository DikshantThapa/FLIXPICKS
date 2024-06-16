// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFHtpKoiWeB-A9NpbH9jfvin5QoBI2reU",
  authDomain: "authentication-tutorial-8e670.firebaseapp.com",
  projectId: "authentication-tutorial-8e670",
  storageBucket: "authentication-tutorial-8e670.appspot.com",
  messagingSenderId: "1090846287141",
  appId: "1:1090846287141:web:8998a116e536e8f11026cc",
  measurementId: "G-K80HX8V704",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
