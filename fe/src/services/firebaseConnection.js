import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// company firebase config object
const companysConfig = {
  123: {
    apiKey: 'AIzaSyCeSm8gTkUJex1B66GVkZN1vrb8bt_xJmU',
    authDomain: 'louvoradvec-47c63.firebaseapp.com',
    projectId: 'louvoradvec-47c63',
    storageBucket: 'louvoradvec-47c63.appspot.com',
    messagingSenderId: '339701795039',
    appId: '1:339701795039:web:7967bc9508cbeabdcbc16a'
  },
  1234: {
    apiKey: 'AIzaSyB8WpaHjzv2WLdM812retS2F5Dk0hSYgCM',
    authDomain: 'appportaria-b0a1b.firebaseapp.com',
    databaseURL: 'https://appportaria-b0a1b-default-rtdb.firebaseio.com',
    projectId: 'appportaria-b0a1b',
    storageBucket: 'appportaria-b0a1b.appspot.com',
    messagingSenderId: '43910768183',
    appId: '1:43910768183:web:33c4d28029359f570c41b2'
  }
}
const companyId = localStorage.getItem('companyId')

const config = companysConfig[companyId]

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
