import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAGmgjWaThIr7nodDdl-EUv5qqkewp-w-Y",
    authDomain: "chat-app-87a77.firebaseapp.com",
    projectId: "chat-app-87a77",
    storageBucket: "chat-app-87a77.appspot.com",
    messagingSenderId: "813868363396",
    appId: "1:813868363396:web:33b824f7eca9abf3f4dcd1"
  };


const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
