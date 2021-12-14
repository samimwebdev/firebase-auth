import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC0Lo7g8dR9fqWlsHCTpyEL6kp9N1zSjUE',
  authDomain: 'fir-auth-45ba4.firebaseapp.com',
  projectId: 'fir-auth-45ba4',
  storageBucket: 'fir-auth-45ba4.appspot.com',
  messagingSenderId: '870472089558',
  appId: '1:870472089558:web:c48ea35598d6f1ee49ee77'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
