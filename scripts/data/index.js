import {header, navLinks} from './index-data.js';

let headerHTML = '';
let navLinksHTML= '';

header.forEach((header) => {
    headerHTML += `
    
        <div class="header-center">
            <h1 class="welcome-message">${header.currentUser}</h1>
        </div>
        <div class="header-right">
            <a href="${header.userSettingsLink}" class="icon-style_header profile-icon" title="Settings">
                <i class="${header.userIcon}"></i>
            </a>
            <a href="#" class="icon-style_header notification-icon">
                <i class="${header.notificationIcon}" title="notifications"></i>
            </a>
            <div class="taskbar-toggle" id="taskbar-toggle">
                <i class="${header.toggleBars}"></i>
                <div class="notification-dropdown">
                    <ul>
                        <li><h1><a href="${header.notificationLink}">Notifications</h1></a></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    })
        
    document.querySelector('.header').innerHTML = headerHTML;

    navLinks.forEach((navLinks) => {

        // za active chani chani uko experimental
        const currentUrl = new URL(window.location.href);
        const linkUrl = new URL(navLinks.url, window.location.origin);
    
        const isActive = currentUrl.pathname === linkUrl.pathname;
        // tehn sytart loopiing throgh the thing wite the thin link nav chaniu cahni uko
        navLinksHTML += `
            <li class="${isActive ? 'active' : ''}">
                <a href="${navLinks.url}" >
                    <i class="${navLinks.icon}"></i>
                    ${navLinks.text}
                </a>
            </li>`;
    });
document.querySelector('.taskbar ul').innerHTML = navLinksHTML;



    