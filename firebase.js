// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc19pKhn46cgBdTd3r6KwW46EljyWo1Z0",
  authDomain: "jeevanwork-f80a3.firebaseapp.com",
  projectId: "jeevanwork-f80a3",
  storageBucket: "jeevanwork-f80a3.firebasestorage.app",
  messagingSenderId: "328869735000",
  appId: "1:328869735000:web:4ab1a6880157b70b8e782d",
  measurementId: "G-R7VV66C2MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
