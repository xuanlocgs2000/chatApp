import Firebase from 'firebase';


const firebaseConfig = {
    apiKey: 'AIzaSyBXg0WtAnHMwM_1TY7cr2usWqHN2apz1zc',
    databaseURL: 'https://chatn-b9768-default-rtdb.firebaseio.com',
    projectId: 'chatn-b9768-default-rtdb',
    appId: '1:20931345732:android:46a33294aed6e076236b11',
};

export default Firebase.initializeApp(firebaseConfig);