import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOM ,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID 
};

// const firebaseConfig = {
//   apiKey: "AIzaSyArJmaxipd4Elp3yPDwbNYHDZxMNLyxNiQ",
//   authDomain: "letmeask-19f73.firebaseapp.com",
//   databaseURL: "https://letmeask-19f73-default-rtdb.firebaseio.com",
//   projectId: "letmeask-19f73",
//   storageBucket: "letmeask-19f73.appspot.com",
//   messagingSenderId: "1051068340940",
//   appId: "1:1051068340940:web:0da13e9dcea7c59deb4069"
// };

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const database = firebase.database();