import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-pcb5VR85wNSDo-eLvUONI3Fe2LY_X4Q",
    authDomain: "chatbox-app-da4bb.firebaseapp.com",
    databaseURL: "https://chatbox-app-da4bb.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base