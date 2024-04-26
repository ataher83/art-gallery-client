// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,

//   apiKey: "AIzaSyAIJvcJkR5VUGTrXQJqPv0ozF01FmnEoUI",
//   authDomain: "the-art-gallery-74571.firebaseapp.com",
//   projectId: "the-art-gallery-74571",
//   storageBucket: "the-art-gallery-74571.appspot.com",
//   messagingSenderId: "257907237444",
//   appId: "1:257907237444:web:0138f1d153a2b6bd195211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;