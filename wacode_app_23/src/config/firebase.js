import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'
import { firebaseProdConfig, firebaseDevConfig } from './firebase.config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const isProd = process.env.NODE_ENV === "production"

// const firebaseProdConfig = {
//   apiKey: "AIzaSyB2W3KnpJwOUqgFx8p6wE0dQ4r2JK40qvA",
//   authDomain: "wacode-2ff06.firebaseapp.com",
//   projectId: "wacode-2ff06",
//   storageBucket: "wacode-2ff06.appspot.com",
//   messagingSenderId: "1061071354672",
//   appId: "1:1061071354672:web:bd3ee8aa0d01c54e5726f5",
//   measurementId: "G-52CSV0H99V"
// };

// const firebaseProdConfig = {
//   apiKey: process.env.REACT_APP_PROD_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROD_FIREBASE_PROJ_ID,
//   storageBucket: process.env.REACT_APP_PROD_FIREBASE_STORAGE_BUCKET,
//   databaseURL: "",
//   messagingSenderId: "1061071354672",
//   appId: process.env.REACT_APP_PROD_FIREBASE_APP_ID,
//   measurementId: "G-52CSV0H99V"
// };

// export const firebaseDevConfig = {
//   projectId: process.env.REACT_APP_FIREBASE_PROJ_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: "1061071354672",
//   measurementId: "G-52CSV0H99V"
// }

const app = (isProd) ? initializeApp(firebaseProdConfig) : initializeApp({ appId: firebaseDevConfig.appId, projectId: firebaseDevConfig.projectId, apiKey: firebaseDevConfig.apiKey, storageBucket: firebaseDevConfig.storageBucket })
const db = (isProd) ? getFirestore(app) : getFirestore()
const auth = (isProd) ? getAuth(app) : getAuth()
const storage = (isProd) ? getStorage(app) : getStorage()
const functions = (isProd) ? getFunctions(app) : getFunctions();

if (!isProd) {
  connectFirestoreEmulator(db, "localhost", 8080)
  connectAuthEmulator(auth, "http://localhost:9099")
  connectStorageEmulator(storage, "localhost", 9199)
  connectFunctionsEmulator(functions, "localhost", 5001)
}
export { 
  app, db, auth, functions, storage
}