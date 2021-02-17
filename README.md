

## Get Firebase credentials
## create firebase.js in src dir

```
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
apiKey: "your_apiKey",
authDomain: "your_authDomain",
projectId: "your_projectId",
storageBucket: "your_storageBucket",
messagingSenderId: your_messagingSenderId",
appId: "your_appId"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
```


## Available Scripts

In the project directory, run:

### `npm i`
### `npm start`

## Create build

### `npm build`

## Deploy on firebase

### `firebase login`
### `firebase init`
### `firebase deploy`
