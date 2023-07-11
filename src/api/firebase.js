import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

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
    // 1. 사용자가 있는 경우에(로그인 한 경우)


    console.log(user);
    callback(user)
  })
}

async function adminUser() {

  // 2. 사용자가 어드민 권한을 가지고 있는가?? 확인


  // 3. {...user, isAdmin:  true/false}
  return get(ref(database, 'admins')).then((snapshot) => {
    if(snapshot.exists()) {
      const admins = snapshot.val();
      console.log(admins);
    }
  })
}
