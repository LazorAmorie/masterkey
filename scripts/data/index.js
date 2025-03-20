import {header, navLinks, balanceTile} from './index-data.js';

let headerHTML = '';
let navLinksHTML= '';
let balanceTileHTML = '';

header.forEach((header) => {
    headerHTML += `
    
        <div class="header-center">
            <h1 class="welcome-message">${header.currentUser}</h1>
        </div>
        <div class="header-right">
            <a href="${header.userSettingsLink}" class="icon-style_header" title="Settings">
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
    
        //const isActive = currentUrl.pathname === linkUrl.pathname;

        const isActive = currentUrl.pathname.startsWith(linkUrl.pathname) || 
                 currentUrl.pathname === linkUrl.pathname;
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

balanceTile.forEach((balanceTile) => {
    balanceTileHTML += `
            <h2>${balanceTile.h2Balancetitle}</h2>
                <p id="total-balance">$${parseFloat(balanceTile.ptotalBalance.replace(/[^0-9.-]+/g,"")).toFixed(2)}</p>
                    <div class="balance-actions">
                        <button class="action-button deposit" onclick="window.location.href='${balanceTile.addLink}'" data-tooltip="${balanceTile.toolTipadd}">
                            <i class="fa-solid fa-plus"></i>
                            <span>${balanceTile.addSpan}</span>
                        </button>
                        <button class="action-button withdraw" onclick="window.location.href='${balanceTile.wiDLink}'" data-tooltip="${balanceTile.toolTipWiD}">
                            <i class="fa-solid fa-minus"></i>
                            <span>${balanceTile.wiDSpan}</span>
                        </button>
                    </div>
    `;
});
document.querySelector('.tile.balance-tile').innerHTML = balanceTileHTML;

