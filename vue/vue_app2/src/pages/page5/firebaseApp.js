import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5ibTuN6Z17nAFTzFJC96tfwatuohYMiE",
    authDomain: "skhu-frontenddevlecture.firebaseapp.com",
    databaseURL: "https://skhu-frontenddevlecture.firebaseio.com",
    projectId: "skhu-frontenddevlecture",
    storageBucket: "skhu-frontenddevlecture.appspot.com",
    messagingSenderId: "579321177484",
    appId: "1:579321177484:web:c5037d663a3f77ef3c22a9",
    measurementId: "G-X86L7T1FZ9"
};
var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;