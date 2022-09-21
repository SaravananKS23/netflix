import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-YU6xyO2HMQtC3II1CMlcTAihdtx_kwo",
  authDomain: "netflix-4b965.firebaseapp.com",
  projectId: "netflix-4b965",
  storageBucket: "netflix-4b965.appspot.com",
  messagingSenderId: "263720740675",
  appId: "1:263720740675:web:9012640bb2cbcd775131f6",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
