// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsddQdEzVSZuxi6amd7BFCHRd3tWO4gt8",
  authDomain: "hngx-image-gallery-task.firebaseapp.com",
  projectId: "hngx-image-gallery-task",
  storageBucket: "hngx-image-gallery-task.appspot.com",
  messagingSenderId: "177552738745",
  appId: "1:177552738745:web:92178bdd344e32db594e68",
  measurementId: "G-EP695B2GNH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
