import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyC4E6hlYYZ6GAvJRYnzUuR68xOufs5KS1w",
  authDomain: "dailyessence-953fe.firebaseapp.com",
  projectId: "dailyessence-953fe",
  storageBucket: "dailyessence-953fe.appspot.com",
  messagingSenderId: "959192260233",
  appId: "1:959192260233:web:64cb21361df3d09404b058",
  measurementId: "G-QLBSVHRYC5"
};

const fire = initializeApp(firebaseConfig);
export const auth = getAuth()
export default fire;