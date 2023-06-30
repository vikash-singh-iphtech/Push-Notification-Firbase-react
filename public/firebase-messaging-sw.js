importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '230575406452' 
});

const messaging = firebase.messaging();

//__________________________________________________________________________________________________


// if upper code is not working then use this code 

// importScripts(
//     "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
//   );
//   importScripts(
//     "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
//   );
//   const firebaseConfig = {
//     apiKey: "AIzaSyDZLtUPRAH2QiydAymfRf4457j7NyUv8SU",
//     authDomain: "pwa-app-2b96d.firebaseapp.com",
//     projectId: "pwa-app-2b96d",
//     storageBucket: "pwa-app-2b96d.appspot.com",
//     messagingSenderId: "230575406452",
//     appId: "1:230575406452:web:fab98689e7446fb3064021",
//     measurementId: "G-V2G6MGPNN5"
//   };
//   const messaging = firebase.messaging();
//   messaging.onBackgroundMessage(function (payload) {
//     console.log("Received background message ", payload);
  
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//       body: payload.notification.body,
//     };
  
//     self.registration.showNotification(notificationTitle, notificationOptions);
//   });