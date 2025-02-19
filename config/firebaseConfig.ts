import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey:"AIzaSyCoo1V_PrYSmWFo2gL-unKpBnqWX5K4qHA",
  authDomain: "aquariumiot-4e46a.firebaseapp.com",
  projectId: "aquariumiot-4e46a",
  storageBucket: "aquariumiot-4e46a.firebasestorage.app",
  messagingSenderId: "909884489318",
  appId: "1:909884489318:web:ba1ad9bc7f05202ffa37a7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };