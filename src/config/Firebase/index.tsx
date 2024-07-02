// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {Database} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDGXNUUfP8y8_NY06d_x9gaOyBnDebiF0',
  authDomain: 'finalmad-dc121.firebaseapp.com',
  projectId: 'finalmad-dc121',
  storageBucket: 'finalmad-dc121.appspot.com',
  messagingSenderId: '107600447597',
  appId: '1:107600447597:web:ddcceca34259f320f0d764',
  databaseURL: 'https://finalmad-dc121-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
