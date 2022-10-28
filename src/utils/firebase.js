import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDk3Nnei8s1X14lurtWlQAbPyElFcxHb3I',
  authDomain: 'audio-app-71c69.firebaseapp.com',
  projectId: 'audio-app-71c69',
  storageBucket: 'audio-app-71c69.appspot.com',
  messagingSenderId: '111098836641',
  appId: '1:111098836641:web:ca85f114cf36f31fd0a2e0',
  measurementId: 'G-4F8DZ6B71N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
