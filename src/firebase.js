import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCRfugrlGsT5KY-4Akkj5x_-rGCf-4rN1c',
	authDomain: 'animelist-953ce.firebaseapp.com',
	databaseURL: 'https://animelist-953ce-default-rtdb.firebaseio.com',
	projectId: 'animelist-953ce',
	storageBucket: 'animelist-953ce.appspot.com',
	messagingSenderId: '607468988001',
	appId: '1:607468988001:web:59ef821c0122f39b4fac20',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
