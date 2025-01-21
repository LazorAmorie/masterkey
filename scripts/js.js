document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  var openButton = document.getElementById('open-button');
  var closeButton = document.getElementById('close-button');
  var profileIcon = document.querySelector('.profile-icon');
  var notificationIcon = document.querySelector('.notification-icon');

  if (openButton) {
    openButton.addEventListener('click', function() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.left = '0';
      openButton.style.display = 'none';
      closeButton.style.display = 'inline';
    });
  } else {
    console.log('open-button not found');
  }

  if (closeButton) {
    closeButton.addEventListener('click', function() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.left = '-200px';
      openButton.style.display = 'inline';
      closeButton.style.display = 'none';
    });
  } else {
    console.log('close-button not found');
  }

  if (profileIcon) {
    profileIcon.addEventListener('click', function() {
      var profile = document.querySelector('.profile');
      if (profile.style.display === 'block') {
        profile.style.display = 'none';
      } else {
        profile.style.display = 'block';
      }
    });
  } else {
    console.log('profile-icon not found');
  }

  if (notificationIcon) {
    notificationIcon.addEventListener('click', function() {
      var dropdown = document.querySelector('.notification-dropdown');
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      } else {
        dropdown.style.display = 'block';
      }
    });
  } else {
    console.log('notification-icon not found');
  }

  // Register service worker for push notifications
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('/scripts/sw.js')
      .then(function(swReg) {
        console.log('Service Worker is registered', swReg);

        swReg.pushManager.getSubscription()
          .then(function(subscription) {
            if (subscription === null) {
              // User is not subscribed
              subscribeUser(swReg);
            } else {
              console.log('User is already subscribed');
            }
          });
      })
      .catch(function(error) {
        console.error('Service Worker Error', error);
      });
  } else {
    console.warn('Push messaging is not supported');
  }

  function subscribeUser(swReg) {
    const applicationServerKey = urlB64ToUint8Array('YOUR_PUBLIC_VAPID_KEY');
    swReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
      console.log('User is subscribed:', subscription);
      // Send subscription to the server
    })
    .catch(function(err) {
      console.log('Failed to subscribe the user: ', err);
    });
  }

  function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
});

