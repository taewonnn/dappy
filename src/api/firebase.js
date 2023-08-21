import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import { v4 as uuid } from 'uuid';


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
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우에(로그인 한 경우)
    const upadtedUser = user ? await adminUser(user) : null;
    // console.log(user);
    callback(upadtedUser);
  })
}

// 어드민유저 판별
async function adminUser(user) {

  // 2. 사용자가 어드민 권한을 가지고 있는가?? 확인

  // 3. {...user, isAdmin:  true/false}
  return get(ref(database, 'admins'))
    .then((snapshot) => {
    if(snapshot.exists()) {
      const admins = snapshot.val();
      console.log('admins',admins)
      const isAdmin = admins.includes(user.uid);
      return {...user, isAdmin}
    }
    return user;
  })
}


// 제품 등록 관련
export async function addNewProduct(product, imageUrl) {
  const id = uuid();
  return set(ref(database, `products/${uuid()}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imageUrl,
    options: product.options.split(','),
  })
}


// 제품 읽어오기
export async function getProducts() {
  return get(ref(database, 'products'))
    .then(snapshot => {
      if(snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      // snapshot이 없는 경우,
      return [];
    })
}


// 장바구니 가져오기
export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`))
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    })
}


// 장바구니 추가하기
export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}


// 장바구니 삭제하기
export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`))
}
