// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDIBluowh50MsKfYdGQNvPgR7conQz0IPE",
  authDomain: "eventos-436b1.firebaseapp.com",
  projectId: "eventos-436b1",
  storageBucket: "eventos-436b1.appspot.com",
  messagingSenderId: "400843405258",
  appId: "1:400843405258:web:ad3a2bb4d9facca05a4133"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export function app() {
//   return initializeApp(firebaseConfig);
// }