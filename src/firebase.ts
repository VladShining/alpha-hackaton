export const firebaseConfig = {
  apiKey: 'AIzaSyCIKWrvy_X6H_LLqtZWULilIPoWMZnW5D8',
  authDomain: 'alpha-hackaton.firebaseapp.com',
  projectId: 'alpha-hackaton',
  storageBucket: 'alpha-hackaton.appspot.com',
  messagingSenderId: '935156235234',
  appId: '1:935156235234:web:468ab5150d80bf039c97bb',
  measurementId: 'G-Y4NZDC1YRD',
};

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export const initFirebase = (
  config: Object,
  col?: string,
  doc?: string | undefined
) => {
  firebase.initializeApp(config);
  // firebaseStorage();
};

export const firebaseAuth = () => {
  return firebase.auth();
};
export async function fireSignIn(email: string, password: string) {
  // return new Promise<void>((res, rej) => {
  await firebaseAuth()
    .signInWithEmailAndPassword(email, password)
    .then(
      () => {
        // res();
        console.clear();
      },
      (e) => {
        // rej(e);
        console.clear();
        return e;
      }
    );
  // });
}
