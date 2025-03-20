document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const elements = {
        openButton: document.getElementById('open-button'),
        closeButton: document.getElementById('close-button'),
        notificationIcon: document.querySelector('.notification-icon'),
        taskbar: document.getElementById('taskbar'),
        taskbarToggle: document.getElementById('taskbar-toggle'),
        financialInsights: document.getElementsByClassName('insight-item'),
        sidebar: document.getElementById('sidebar')
    };

    let financialInsightsLoaded = false;

    const openSidebar = () => {
        elements.sidebar.style.left = '0';
        elements.openButton.style.display = 'none';
        elements.closeButton.style.display = 'inline';
    };

    const closeSidebar = () => {
        elements.sidebar.style.left = '-200px';
        elements.openButton.style.display = 'inline';
        elements.closeButton.style.display = 'none';
    };
    const toggleNotificationDropdown = () => {
        const dropdown = document.querySelector('.notification-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

    const toggleTaskbar = () => {
        elements.taskbar.classList.toggle('open');
    };

    const handleScroll = () => {
        const transactionsSection = document.querySelector('.transactions-overview');
        const transactionsSectionBottom = transactionsSection.getBoundingClientRect().bottom;
        
        if (transactionsSectionBottom < window.innerHeight && !financialInsightsLoaded) {
            loadFinancialInsights();
            financialInsightsLoaded = true;
        }
    };

    const loadFinancialInsights = () => {
       
        console.log('Loading financial insights...');
    };

    const setupEventListeners = () => {
        
        if (elements.openButton) {
            elements.openButton.addEventListener('click', openSidebar);
        } else {
            console.log('open-button not found');
        }

        if (elements.closeButton) {
            elements.closeButton.addEventListener('click', closeSidebar);
        } else {
            console.log('close-button not found');
        }
        if (elements.notificationIcon) {
            elements.notificationIcon.addEventListener('click', toggleNotificationDropdown);
        } else {
            console.log('notification-icon not found');
        }    
        if (elements.taskbarToggle) {
            elements.taskbarToggle.addEventListener('click', toggleTaskbar);
        } else {
            console.log('taskbar-toggle not found');
        }

        window.addEventListener('scroll', handleScroll);
    };

    setupEventListeners();

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.action-button, .tile');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            ripple.className = 'ripple';
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});