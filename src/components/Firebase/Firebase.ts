import * as fb from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAxm2dIJKM9FlQXbuTMCszmDvMyOX_LJIY",
  authDomain: "feedaback-web.firebaseapp.com",
  databaseURL: "https://feedaback-web.firebaseio.com",
  projectId: "feedaback-web",
  storageBucket: "",
  messagingSenderId: "80038685245",
  appId: "1:80038685245:web:ecdc98af4d4f1d0d"
};

class Firebase {
  constructor() {
    fb.initializeApp(firebaseConfig);
  }

  public test(listener:(a: any) => void) {
    fb.database().ref("users/123").on("value", (snapshot) => {
      listener(snapshot.val())
    })
 
  }
}

const FirebaseInstance = new Firebase();

export default FirebaseInstance;