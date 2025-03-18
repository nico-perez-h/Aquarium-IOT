import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCoo1V_PrYSmWFo2gL-unKpBnqWX5K4qHA",
  authDomain: "aquariumiot-4e46a.firebaseapp.com",
  projectId: "aquariumiot-4e46a",
  storageBucket: "aquariumiot-4e46a.firebasestorage.app",
  messagingSenderId: "909884489318",
  appId: "1:909884489318:web:5e12a5c8e8c3be15fa37a7",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

export { auth };