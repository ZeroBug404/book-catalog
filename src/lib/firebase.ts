import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx0yHtK0E8Ka5L51XLSG0vty4NfMFQZco",
  authDomain: "book-catalog-7b13e.firebaseapp.com",
  projectId: "book-catalog-7b13e",
  storageBucket: "book-catalog-7b13e.appspot.com",
  messagingSenderId: "170167409384",
  appId: "1:170167409384:web:bbf0a0bf54b1a6154d075d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
