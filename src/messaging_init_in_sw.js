import { initializeApp } from "firebase/app";
import { getMessaging , getToken} from "firebase/messaging";

const firebaseConfig = {

  apiKey: "AIzaSyDZLtUPRAH2QiydAymfRf4457j7NyUv8SU",
  authDomain: "pwa-app-2b96d.firebaseapp.com",
  projectId: "pwa-app-2b96d",
  storageBucket: "pwa-app-2b96d.appspot.com",
  messagingSenderId: "230575406452",
  appId: "1:230575406452:web:fab98689e7446fb3064021",
  measurementId: "G-V2G6MGPNN5"
 };

 function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
       
       
        const app = initializeApp(firebaseConfig);
       const messaging = getMessaging(app);
     getToken(messaging , {vapidKey:'BP3ZYSMQgGhJ_EnaGfA3G_nJtqutO-1-QF1ps4pUDi84S02I8XkLYrwDZQqFWxMwqdxNCYb53ooMCAtpbFDfBcc' })
     .then((currentToken) => {
    if (currentToken){
        console.log('currentToken: ' ,currentToken);

        
    }
    else {
        console.log('can not get token');
        }
});
      }
        else {
            console.log('Do not have permission ');
        }
    });
}
requestPermission();


