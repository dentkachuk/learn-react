import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVaylwdowsfcIu_HAnf4ekC_ij3fLqcTA",
  authDomain: "todo-app-ef691.firebaseapp.com",
  databaseURL: "https://todo-app-ef691.firebaseio.com",
  projectId: "todo-app-ef691",
  storageBucket: "todo-app-ef691.appspot.com",
  messagingSenderId: "570861697202",
  appId: "1:570861697202:web:8d4dc257481a8088d371ab",
  measurementId: "G-GBZGM0HR4C",
});

const db = firebaseApp.firestore();

export default db;