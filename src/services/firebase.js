import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFeeseZtsnxGNd3_wrCsSXsYTpAq0Sq5Y",
  authDomain: "meuape-23fc6.firebaseapp.com",
  projectId: "meuape-23fc6",
  storageBucket: "meuape-23fc6.appspot.com",
  messagingSenderId: "1014720541691",
  appId: "1:1014720541691:web:ddc4b926585d4022cd115e",
  measurementId: "G-WS6CYW42DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);


//createUserWithEmailAndPassword(auth, email, password)
//  .then((userCredential) => {
    // Signed in
  //  const user = userCredential.user;
    // ...
 // })
 // .catch((error) => {
 //   const errorCode = error.code;
 //   const errorMessage = error.message;
    // ..
 // });