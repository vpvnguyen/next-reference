export default async function loadDb() {
  // Here, we use import() function to load the firebase modules. It returns a promise and we use await to wait and resolve the modules.
  // const firebase = require('firebase/app')
  // require('firebase/database')

  const firebase = await import('firebase/app');
  await import('firebase/database');
  
  try {
    firebase.initializeApp({
      databaseURL: 'https://hacker-news.firebaseio.com'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database().ref('v0')
}
