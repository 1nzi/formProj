import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_sYdUjiqKp8EJKzaAiKRGmW7aJB6tvP4",
    authDomain: "fir-app-428a5.firebaseapp.com",
    databaseURL: "https://fir-app-428a5.firebaseio.com",
    projectId: "fir-app-428a5",
    storageBucket: "fir-app-428a5.appspot.com",
    messagingSenderId: "661559956432",
    appId: "1:661559956432:web:8e0faa2b4d061304cf5fd5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;