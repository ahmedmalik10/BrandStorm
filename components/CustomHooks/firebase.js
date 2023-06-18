// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwivSPTJ7kNvTBWHQL9PCVhXjslqAa210",
  authDomain: "brandstorm-700a1.firebaseapp.com",
  projectId: "brandstorm-700a1",
  storageBucket: "brandstorm-700a1.appspot.com",
  messagingSenderId: "122378130142",
  appId: "1:122378130142:web:5751e1ba57aecc20f6284f",
  measurementId: "G-MT9FMGC9PL",
  databaseURL: "https: //brandstorm-700a1-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app