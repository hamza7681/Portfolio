import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANhO79gWnPBQe2gCcbd9cL3PfVPS8ZCug",
  authDomain: "portfolio-b3e80.firebaseapp.com",
  projectId: "portfolio-b3e80",
  storageBucket: "portfolio-b3e80.appspot.com",
  messagingSenderId: "98714100553",
  appId: "1:98714100553:web:cb36f7b3d711b57c003098"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {app,db}