// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDmuRxQPDAHpwOVyiK-wPPXM0fNk_bepDo',
  authDomain: 'fir-contact-app-40f7d.firebaseapp.com',
  projectId: 'fir-contact-app-40f7d',
  storageBucket: 'fir-contact-app-40f7d.firebasestorage.app',
  messagingSenderId: '1010733199599',
  appId: '1:1010733199599:web:0b990902bc3c807091eb1a',
  measurementId: 'G-MJWY0CV4VH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
