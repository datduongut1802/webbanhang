import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
        apiKey: "AIzaSyDT6pOiWCg9m39mqxD3TTMva_2eFE_u8ec",
        authDomain: "restaurantapp-2bb9c.firebaseapp.com",
        databaseURL: "https://restaurantapp-2bb9c-default-rtdb.firebaseio.com",
        projectId: "restaurantapp-2bb9c",
        storageBucket: "restaurantapp-2bb9c.appspot.com",
        messagingSenderId: "1072785482027",
        appId: "1:1072785482027:web:0d4081e536ebcd69e9a56e"
      };

const app = getApps.length > 0 ? getApps() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };