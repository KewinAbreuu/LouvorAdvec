import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

/* CODES COMPANYS
  123= loginsGeral
  352847= Life
*/

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
  352847: {
    apiKey: 'AIzaSyAl82OCwHzXeeI9H5pF1nBTGTBS3k2rktQ',
    authDomain: 'kontrolllife-b4a16.firebaseapp.com',
    projectId: 'kontrolllife-b4a16',
    storageBucket: 'kontrolllife-b4a16.appspot.com',
    messagingSenderId: '412857269676',
    appId: '1:412857269676:web:bcdf4d4f5aaff2c3a04e09'
  }
}
// const companyId = localStorage.getItem('CodigoEmpresa')
const companyId = 123

const config = companysConfig[companyId]

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
