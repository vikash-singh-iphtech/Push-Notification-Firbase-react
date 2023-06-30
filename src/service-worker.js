self.addEventListener('push', function(event) {
    var notification = event.data.json();
    event.waitUntil(
      self.registration.showNotification(notification.title, notification.options)
    );
  });
  

//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(function(registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch(function(error) {
//         console.error('Service Worker registration failed:', error);
//       });
//   }
  