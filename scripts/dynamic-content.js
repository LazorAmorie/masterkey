document.addEventListener('DOMContentLoaded', function() {
    const app = {
        init() {
            this.cacheElements();
            this.renderContent();
        },
        cacheElements() {
            this.totalBalance = document.getElementById('total-balance');
            this.quickAccessTiles = document.getElementById('quick-access-tiles');
            this.transactionsList = document.getElementById('transactions-list');
        },
        renderContent() {
            this.renderBalance();
            this.renderQuickAccessTiles();
            this.renderTransactions();
        },
        renderBalance() {
            // Fetch and display the total balance
            const balance = 5678.90; // Example balance
            this.totalBalance.textContent = `$${balance.toFixed(2)}`;
        },
        renderQuickAccessTiles() {
            const tiles = [
                { 
                    icon: 'fa-exchange-alt', 
                    text: 'Send Money', 
                    link: '/pages/send-money.html' 
                }, { 
                    icon: 'fa-file-invoice-dollar', 
                    text: 'Pay Bills', 
                    link: '/pages/pay-bills.html' 
                }, { 
                    icon: 'fa-qrcode ', 
                    text: 'Scan QR Code', 
                    action: 'scan-qr' 
                }, { 
                    icon: 'fa-history', 
                    text: 'Transaction History', 
                    //link: '/pages/transaction-history.html' 
                }
            ];

            tiles.forEach(tile => {
                const tileElement = document.createElement('div');
                tileElement.className = 'tile';
                tileElement.innerHTML = `
                    <i class="fa-solid ${tile.icon}">
                    </i> 
                    ${tile.text}`;
                if (tile.link) {
                    tileElement.onclick = () => window.location.href = tile.link;
                } else if (tile.action) {
                    tileElement.dataset.action = tile.action;
                }
                this.quickAccessTiles.appendChild(tileElement);
            });
        },

        renderTransactions() {
            const transactions = [
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

            transactions.forEach(transaction => {
                const transactionElement = document.createElement('li');
                transactionElement.innerHTML = `
                <span>
                    ${transaction.type}
                </span> 
                <span>
                    ${transaction.amount}
                </span> 
                <span>
                    ${transaction.date}
                </span>
                
                `;

                this.transactionsList.appendChild(transactionElement);
            });
        }
    };

    app.init();
});
