import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCvwZFX5wr98otZVz3KLnE6PKMGVSRyYXU",
  authDomain: "reporting-b72fe.firebaseapp.com",
  databaseURL: "https://reporting-b72fe.firebaseio.com",
  projectId: "reporting-b72fe",
  storageBucket: "reporting-b72fe.appspot.com",
  messagingSenderId: "453644003218"
};

firebase.initializeApp(config)

export const provider = new firebase.auth.EmailAuthProvider();
export const auth = firebase.auth();
export default firebase;