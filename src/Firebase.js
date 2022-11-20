// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAU-OAO--wwDPoeSEyMdBOXp3UY8oKkiGM",
  authDomain: "app-a6b27.firebaseapp.com",
  projectId: "app-a6b27",
  storageBucket: "app-a6b27.appspot.com",
  messagingSenderId: "403826314002",
  appId: "1:403826314002:web:d21f1432b7f14c6a46c1cb",
  measurementId: "G-GZ9482JZH3"
}; 


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();


// export  {db,auth};

// export default firebaseConfig 





// const firebaseConfig = {
//   apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
//   authDomain: "todo-app-e3cf0.firebaseapp.com",
//   projectId: "todo-app-e3cf0",
//   storageBucket: "todo-app-e3cf0.appspot.com",
//   messagingSenderId: "940016886081",
//   appId: "1:940016886081:web:91686613f16b1b1f8001c0",
//   measurementId: "G-JHPC7TP12K"
// };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };