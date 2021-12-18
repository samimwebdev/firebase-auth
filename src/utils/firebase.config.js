import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0Lo7g8dR9fqWlsHCTpyEL6kp9N1zSjUE",
  authDomain: "fir-auth-45ba4.firebaseapp.com",
  projectId: "fir-auth-45ba4",
  storageBucket: "fir-auth-45ba4.appspot.com",
  messagingSenderId: "870472089558",
  appId: "1:870472089558:web:c48ea35598d6f1ee49ee77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const storage = getStorage(app);

export const notesColRef = collection(db, "notes");
// const queriedData = query(colRef, where("title", "==", "title From vscode"));

// getDocs(queriedData).then((snapshot) => {
//   const notes = [];
//   snapshot.docs.forEach((doc) => {
//     notes.push({
//       ...doc.data(),
//       id: doc.id,
//     });
//   });
//   console.log(notes);
// });

// // onSnapshot(queriedData, (snapshot) => {
// //   const notes = [];
// //   snapshot.docs.forEach((doc) => {
// //     notes.push({
// //       ...doc.data(),
// //       id: doc.id,
// //     });
// //   });
// //   console.log(notes);
// // });

// //Getting a single
// const docRef = doc(colRef, "CO3zFWL2juPjThq2z8cR");
// // getDoc(docRef)
// //   .then((doc) => {
// //     console.log(doc.data(), doc.id);
// //   })
// //   .catch((err) => console.log(err));

// // addDoc(colRef, {
// //   title: "title From vscode",
// //   description: "Description From vscode",
// //   user: {
// //     name: "dfdfgfv",
// //     id: 2343536,
// //   },
// // })

// updateDoc(docRef, {
//   title: "Updated title",
//   "user.name": "Honu",
// });

// deleteDoc(docRef).then(() => {
//   console.log("data deleted successfully");
// });
