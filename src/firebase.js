import firebase from 'firebase';

const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyAPOjBYIBVlBMc50a6dKJI1AXvfIiuZJ8c",
    authDomain: "todo-app-77e22.firebaseapp.com",
    projectId: "todo-app-77e22",
    storageBucket: "todo-app-77e22.appspot.com",
    messagingSenderId: "1071358979481",
    appId: "1:1071358979481:web:0bda770eb44b50f5987708",
    measurementId: "G-HQ653LYVZR"
  });

  const db= firebaseApp.firestore();

  export default db;

