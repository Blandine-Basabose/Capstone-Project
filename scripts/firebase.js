
const firebaseConfig = {
    apiKey: "AIzaSyAmjSaPEpa8QqgNAtvam3mH56k8l9Loe6M",
    authDomain: "my-brand-832ab.firebaseapp.com",
    projectId: "my-brand-832ab",
    storageBucket: "my-brand-832ab.appspot.com",
    messagingSenderId: "779202197671",
    appId: "1:779202197671:web:0e6c4d03a059fcc2c18382",
    measurementId: "G-3SMX0EBXCN"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const auth= firebase.auth()
  