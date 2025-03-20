export const header = [{
    currentUser: 'GEORGE HUSSEIN',
    userIcon: 'fa-solid fa-user',
    userSettingsLink: './pages/settings.html',
    notificationIcon: 'fa-solid fa-bell',
    notificationLink: './pages/notification.html',
    toggleBars: 'fa-solid fa-bars'
}];

export const navLinks = [{
        text: "Home",
        icon: "fa-solid fa-home",
        url: "./new-home.html"  
    },
    {
        text: "Portfolio",
        icon: "fa-solid fa-chart-line",
        url: "./pages/portfolio.html"
    },
    {
        text: "Market",
        icon: "fa-solid fa-chart-bar",
        url: "./pages/market.html"
    },
    {
        text: "Settings",
        icon: "fa-solid fa-cogs",
        url: "./pages/settings.html"
    },
    {
        text: "Logout",
        icon: "fa-solid fa-sign-out",
        url: "./pages/logout.html"
    }];

export const balanceTile =[{
    h2Balancetitle: 'Total Balance',
    ptotalBalance: '$5007868.00000',
    toolTipadd: 'Add money to your account',
    toolTipWiD: 'Withdraw funds to your bank account',
    addLink: './pages/add-funds.html',
    addIcon: 'fa-solid fa-arrow-right-from-bracket',
    addSpan: 'Deposit',
    wiDLink: './pages/withdraw-funds.html',
    wiDIcon: 'fa-solid fa-arrow-right-from-bracket',
    wiDSpan: 'Withdraw',
}];

export const dashboard = [{
    titleText: "Wallet",
    icon: "fa-solid fa-wallet",
    description: "Manage your wallet"  
},
{
    titleText: "Transfer",
    icon: "fa-solid fa-exchange-alt",
    description: "Transfer funds"
},
{
    titleText: "Invest",
    icon: "fa-solid fa-chart-line",
    description: "Invest in stocks"
},
{
    titleText: "Cards",
    icon: "fa-solid fa-credit-card",
    description: "Manage your cards"
}];

export const quickAccessTiles = [
    { 
        icon: "fa-solid fa-exchange-alt", 
        text: "Send Money", 
        url: "./pages/send-money.html" 
    }, { 
        icon: "fa-solid fa-file-invoice-dollar", 
        text: "Pay Bills", 
        url: "./pages/pay-bills.html" 
    }, { 
        icon: "fa-solid fa-qrcode", 
        text: "Scan QR Code", 
        action: "qr-code" 
    }, { 
        icon: "fa-solid fa-history", 
        text: "Transaction History", 
        url: "./pages/transaction-history.html" 
    }, {
        icon: "fa-solid fa-user-friends",
        text: "Refer a Friend",
        action: "refer-friend"
    }
];

export const transactHist = [
    { 
        type: '🛒 Payment', 
        amount: '$45.00', 
        date: '12/07/2024' 
    }, { 
        type: '📥 Received', 
        amount: '$120.00', 
        date: '12/06/2024'
    }, { 
        type: '🏠 Rent', 
        amount: '$1,000.00', 
        date: '12/05/2024' 
    }
];