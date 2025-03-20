document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

const app = {
    init() {
      this.cacheElements();
      this.bindEvents();
 },
 cacheElements() {
    this.openButton = document.getElementById('open-button');
    this.closeButton = document.getElementById('close-button');
    this.profileIcon = document.querySelector('.profile-icon');
    this.notificationIcon = document.querySelector('.notification-icon');
    this.taskbar = document.getElementById('taskbar');
    this.taskbarToggle = document.getElementById('taskbar-toggle');
    this.financialInsights = document.getElementsByClassName('insight-item');
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

    if (this.taskbarToggle) {
      this.taskbarToggle.addEventListener('click', this.toggleTaskbar.bind(this));
    } else {
      console.log('taskbar-toggle not found');
    }

    window.addEventListener('scroll', this.handleScroll.bind(this));
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
  toggleTaskbar() {
    this.taskbar.classList.toggle('open');
  },
  handleScroll() {
    const transactionsSection = document.querySelector('.transactions-overview');
    const transactionsSectionBottom = transactionsSection.getBoundingClientRect().bottom;
    if (transactionsSectionBottom < window.innerHeight && !this.financialInsightsLoaded) {
      this.loadFinancialInsights();
      this.financialInsightsLoaded = true;
    }
  }

};

app.init();
});
  