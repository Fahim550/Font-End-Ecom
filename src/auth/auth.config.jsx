// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPgx42IITf9n9oWR8vGlzNn3RiU5Fk8I",
  authDomain: "font-end-ecom.firebaseapp.com",
  projectId: "font-end-ecom",
  storageBucket: "font-end-ecom.appspot.com",
  messagingSenderId: "621748703736",
  appId: "1:621748703736:web:6c491a45a23cbbb138c60d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage=getStorage(app)
export const db=getFirestore(app)