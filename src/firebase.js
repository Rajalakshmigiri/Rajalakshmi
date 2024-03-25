import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence  } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCv9lA33qyPzP4VF2RUiWVbmBSRIUxFvs8",
  authDomain: "my-raf-app.firebaseapp.com",
  projectId: "my-raf-app",
  databaseURL: "https://my-raf-app-default-rtdb.firebaseio.com",
  storageBucket: "my-raf-app.appspot.com",
  messagingSenderId: "685030693918",
  appId: "1:685030693918:web:52e4e0142be17d0550220f",
  measurementId: "G-CRETT8YP96",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const db = getDatabase(app);
const dbFire = getFirestore(app);
const imgDB = getStorage(app);

setPersistence(auth, browserSessionPersistence);

export { app, auth, db, dbFire, setPersistence, browserSessionPersistence, imgDB };