// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage , ref , uploadBytes} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaj7iUz9wzqgulNW6AARr7YQhS95dtyW8",
  authDomain: "auth-exp-adv.firebaseapp.com",
  projectId: "auth-exp-adv",
  storageBucket: "auth-exp-adv.appspot.com",
  messagingSenderId: "1014926632563",
  appId: "1:1014926632563:web:94a1ec723d959875042c06",
  measurementId: "G-GGR7CPDKSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const registerUser = async (userInfo)=>{
  const { fullname, email, password} = userInfo;
  await createUserWithEmailAndPassword(auth, email, password)
  return addDoc(collection(db, 'users'), {
      email,
      fullname,
    });

}
  const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const addProduct = async(product) =>{
    const {title, description,price, image} = product
    const storageRef = ref(storage, 'products/' + image.name)
    await uploadBytes(storageRef, image)
    const url = await getDownloadURL(storageRef)
    return addDoc(collection(db, "products"), {title, description, price, image: url})
}

async function getProducts(){
  const querySnapshot = await getDocs(collection(db, "products"))
  const products = []
  querySnapshot.forEach((doc) => {
     const data = doc.data()
     data.id = doc.id
     products.push(data)
  })
  return products
}

const getSingleProduct = async (productId) => {
  const docSnap = await getDoc(doc(db, "products", productId))
  if (docSnap.exists()){
    return docSnap.data()
  } else {
    console.log("No such doucument")
  }
}

export {
   registerUser, 
    loginUser,
    auth,
    onAuthStateChanged,
    addProduct,
    getProducts,
    getSingleProduct

}