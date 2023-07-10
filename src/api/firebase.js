import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// login
export function login() {
  signInWithPopup(auth, provider)
    // .then((result) => {
    //   const user = result.user;
    //   console.log(user);
    //   return user;
    // })
    .catch(console.error);
}

// logout
export function logout() {
  signOut(auth).then(() => null);
}

// 캐시 저장
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user)
  })
}
