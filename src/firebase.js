import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCb2l_cm249C4SlJPOLX_35i49bgbnRSUk",
    authDomain: "netflix-clone-9059e.firebaseapp.com",
    projectId: "netflix-clone-9059e",
    storageBucket: "netflix-clone-9059e.appspot.com",
    messagingSenderId: "549371845779",
    appId: "1:549371845779:web:3d9ea7394456f7032d4166"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {auth};
  export default db;