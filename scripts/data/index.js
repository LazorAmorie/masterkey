/**         DO NOT DELETE THE COMMENTS BUT RATHER CONSULT THEM IF NEEDED TO UNDERSTAND THE CODE         **/
/**
/*** NOTES ON THE CODE IN THE FILE
/**
/** EVRY BLOCK ON THE HTML PAGE (INDEX.HTML) AS REFFERENCED FROM THIS FIEL (INDEX.JS STARTS WITH:
/**
/**  import {theWantedDataBlock} from './index-data.js; ( the page that holds the data structure for every repeatatice line of data)
/**
/** THEN WE SET THE VARIABLE TO REFERNCE THE QUERIES FOR EVERY PARTICULAR BLOCK FOR THE INDEX.HTML:
/**
/**  let let theNeededBlockHTML = '';
/**
/** THEN WE EXECUTE A forEach loop WITH REFFERECNE TO OUR TARGETED function IN AN ARROW function ( I DONT KNOW IF IT MAKES SENSE BUT IT WORKS ):
/**
/**  theWantedDataBlock.forEach((theWantedDataBlock) => {
/**   theNeededBlockHTML += `
/**
/**  here we write the tartgeted html block with reference to our variable set on let and the one we are looping through together with the 
/**  data from our data file inside the `( i have forgotten the name )` 
/**
/**          e.g.
/**             
/**          <li class="${isActive ? 'active' : ''}">
/**                <a href="${theWantedDataBlock.url}" >
/**                    <i class="${theWantedDataBlock.icon}"></i>
/**                    ${theWantedDataBlock.text}
/**                </a>
/**          </li>
/**
/**   `;});
/**
/** THEN AFTER EXECUTING THAT WE SELECT THE QUERY FOR THE HTML WITH REFERNCE TO THE TARGETED PARENT SELECTOR IN THE HTML PAGE ( index.html ):
/**
/**  document.querySelector('.targetedSelector').innerHTML = theNeededBlockHTML;
/**
/** IF ANYTHING THEN ITS JUST SOEM CONDITIONING WHICH MAY VARY ACORDING TO USE CASE ...THIS HELPS TO UNDESTAND THE CODE BETTER FOR EAST EDITTING AND 
/** MODIFFICATION OF THE CODEBASE
/**
/**         END OF NOTES (MIN DOCUMENTATION KINDA )
***/

import {header, navLinks, balanceTile, dashboard, quickAccessTiles, transactHist, insights} from './index-data.js';

    // setting up the variables for the whole page gradually 

let headerHTML = '';
let navLinksHTML= '';
let balanceTileHTML = '';
let dashboardHTML = '';
let quickAccessTilesHTML = '';
let transactHistHTML = '';
let insightsHTML = '';


    // start workimg out the set globalvariables on let block
    // we start withe haedr ...

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

    // the sidebar nav  link markup code and logic 

    navLinks.forEach((navLinks) => {
        // the logic to determine if the link is active / i hate inside logic aaaaaaaaaaah
        const currentUrl = new URL(window.location.href);
        const linkUrl = new URL(navLinks.url, window.location.origin);
        const isActive = currentUrl.pathname.startsWith(linkUrl.pathname) || currentUrl.pathname === linkUrl.pathname;

        //the genarate the nav link with athe conditioning logic applied....

        navLinksHTML += `
            <li class="${isActive ? 'active' : ''}">
                <a href="${navLinks.url}" >
                    <i class="${navLinks.icon}"></i>
                    ${navLinks.text}
                </a>
            </li>`;
    });
document.querySelector('.taskbar ul').innerHTML = navLinksHTML;

/// the bslance tile well marked up ad ready ...

balanceTile.forEach((balanceTile) => {
    balanceTileHTML += `
            <h1>${balanceTile.h2Balancetitle}</h1>
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

// dashboard genarating cod e looped through gracefully .....

dashboard.forEach((dashboard) => {
    dashboardHTML +=`
        <a href="${dashboard.tileLink}">
        <div class="tile">
            <i class="${dashboard.icon}"></i>
            <div class="tile-title">${dashboard.titleText}</div>
            <div class="tile-description">${dashboard.description}</div>
        </div>
        </a>
    `;
});
document.querySelector('.dashboard').innerHTML = dashboardHTML;


/*********  below ia the most complicted code ive written so far in this code base ,.... entr at your own risk .- 2KAY */
quickAccessTiles.forEach((quickAccessTiles) => {
    if (quickAccessTiles.url) {
        quickAccessTilesHTML += `
        <div class="tile" data-url="${quickAccessTiles.url}">
            <i class="${quickAccessTiles.icon}"></i>
                ${quickAccessTiles.text}
        </div>   
    `;
    } else if (quickAccessTiles.action) {
        quickAccessTilesHTML += `
        <div class="tile" data-action="${quickAccessTiles.action}">
            <i class="${quickAccessTiles.icon}"></i>
                ${quickAccessTiles.text}
        </div>   
    `;
    }
});
document.querySelector('.quick-access').innerHTML = quickAccessTilesHTML;

document.querySelectorAll('.quick-access .tile').forEach(tile => {
    tile.addEventListener('click', () => {
        const url = tile.getAttribute('data-url');
        const action = tile.getAttribute('data-action');

        if (url) {
            window.location.href = url; 
        } else if (action) {
            handleAction(action); 
        }
    });
});

function handleAction(action) {
    if (action === "qr-code") {
        openQRCode();
    } else if (action === "refer-friend") {
        console.log("A friend has been referred."); // aak ndika refer a friend feature am thinkingabout it will try it out though with a much more robust logical aproach with an oop POV
    } else {
        console.log(`Unknown action: ${action}`);
    }
}

// A more simpler nonc complcated function to open teh QR code i hope it works
function openQRCode() {
    const qrCodeContent = "https://lazoramorie.github.io/masterkey/";
    const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeContent)}`;

    const modalHTML = `
        <div id="qr-code-modal">
            <h2>Scan QR Code</h2>
            <img src="${qrCodeImageUrl}" alt="QR Code" />
            <button id="close-modal-button">Close</button>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Attach event listener to the close button
    document.getElementById('close-modal-button').addEventListener('click', closeModal);
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('qr-code-modal');
    if (modal) {
        modal.remove();
    }
}

// the history transaction part thing...

transactHist.forEach((transactHist) => {
    transactHistHTML += `
           
                <li>
                    <span>${transactHist.type}</span>
                    <span>${transactHist.amount}</span>
                    <span>${transactHist.date}</span>
                </li>
            
            
    `;
});
document.querySelector('#transactions-list').innerHTML = transactHistHTML;

insights.forEach((insights) => {
    insightsHTML += `
        <div class="insight-item">
                <h3>${insights.title}</h3>
                <p>${insights.content}</p>
        </div>   
    `;
});
document.querySelector('#financial-insights').innerHTML = insightsHTML;