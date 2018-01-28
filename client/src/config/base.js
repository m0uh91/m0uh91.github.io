import {initializeApp} from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyD6VPbfQWZiZo5BhKkAPaoKohVVNkFgD8k',
  authDomain: 'homepage-3c38a.firebaseapp.com',
  databaseURL: 'https://homepage-3c38a.firebaseio.com',
  projectId: 'homepage-3c38a',
  storageBucket: 'homepage-3c38a.appspot.com',
  messagingSenderId: '98293945450'
})

export const db = app.database()
export const storageRef = app.storage().ref('logoIframe')
export const iframesRef = db.ref('iframe')
