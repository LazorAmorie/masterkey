document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  const app = {
    init() {
      this.cacheElements();
      this.bindEvents();
      this.registerServiceWorker();
    },
    cacheElements() {
      this.openButton = document.getElementById('open-button');
      this.closeButton = document.getElementById('close-button');
      this.profileIcon = document.querySelector('.profile-icon');
      this.notificationIcon = document.querySelector('.notification-icon');
    },
    bindEvents() {
      if (this.openButton) {
        this.openButton.addEventListener('click', this.openSidebar.bind(this));
      } else {
        console.log('open-button not found');
      }

      if (this.closeButton) {
        this.closeButton.addEventListener('click', this.closeSidebar.bind(this));
      } else {
        console.log('close-button not found');
      }

      if (this.profileIcon) {
        this.profileIcon.addEventListener('click', this.toggleProfile.bind(this));
      } else {
        console.log('profile-icon not found');
      }

      if (this.notificationIcon) {
        this.notificationIcon.addEventListener('click', this.toggleNotificationDropdown.bind(this));
      } else {
        console.log('notification-icon not found');
      }
    },
    openSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.style.left = '0';
      this.openButton.style.display = 'none';
      this.closeButton.style.display = 'inline';
    },
    closeSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.style.left = '-200px';
      this.openButton.style.display = 'inline';
      this.closeButton.style.display = 'none';
    },
    toggleProfile() {
      const profile = document.querySelector('.profile');
      profile.style.display = (profile.style.display === 'block') ? 'none' : 'block';
    },
    toggleNotificationDropdown() {
      const dropdown = document.querySelector('.notification-dropdown');
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    },
    registerServiceWorker() {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('/scripts/sw.js')
          .then(swReg => {
            console.log('Service Worker is registered', swReg);
            swReg.pushManager.getSubscription()
              .then(subscription => {
                if (subscription === null) {
                  this.subscribeUser(swReg);
                } else {
                  console.log('User is already subscribed');
                }
              });
          })
          .catch(error => {
            console.error('Service Worker Error', error);
          });
      } else {
        console.warn('Push messaging is not supported');
      }
    },
    subscribeUser(swReg) {
      const applicationServerKey = this.urlB64ToUint8Array('YOUR_PUBLIC_VAPID_KEY');
      swReg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      })
      .then(subscription => {
        console.log('User is subscribed:', subscription);
        // Send subscription to the server
      })
      .catch(err => {
        console.log('Failed to subscribe the user: ', err);
      });
    },
    urlB64ToUint8Array(base64String) {
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
  };

  app.init();
});

