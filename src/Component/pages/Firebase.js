

import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import {getAuth} from "firebase/auth"
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyA-recdIRgExevrtFRFn5ov3s097RpiKSc",
  authDomain: "crud-app-35123.firebaseapp.com",
  databaseURL: "https://crud-app-35123-default-rtdb.firebaseio.com",
  projectId: "crud-app-35123",
  storageBucket: "crud-app-35123.appspot.com",
  messagingSenderId: "476140468544",
  appId: "1:476140468544:web:76d3295ac1db8eb03062a5"
};

// Initialize Firebase
const fireDb=firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref()

// const app = initializeApp(firebaseConfig)
// export const auth = getAuth(app)

