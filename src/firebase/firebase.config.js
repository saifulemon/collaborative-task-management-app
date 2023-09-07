// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYjnOiMxP8TRB1dvLXitAXS6wiBYgaEFU",
  authDomain: "task-management-app-7f68e.firebaseapp.com",
  projectId: "task-management-app-7f68e",
  storageBucket: "task-management-app-7f68e.appspot.com",
  messagingSenderId: "369932626151",
  appId: "1:369932626151:web:c6128ee5e77f43170f9a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;