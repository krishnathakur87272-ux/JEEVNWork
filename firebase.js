// Replace with your Firebase config
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'REPLACE_APIKEY',
  authDomain: 'REPLACE_AUTHDOMAIN',
  projectId: 'REPLACE_PROJECTID',
  storageBucket: 'REPLACE_STORAGEBUCKET',
  messagingSenderId: 'REPLACE_MESSAGING_SENDER_ID',
  appId: 'REPLACE_APPID'
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
