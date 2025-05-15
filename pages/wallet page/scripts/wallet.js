let walletBalance = 0;

// Add funds to the wallet
function addFunds() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        walletBalance += amount;
        updateWalletBalance();
    } else {
        alert('Please enter a valid amount.');
    }
}

// Withdraw funds from the wallet
function withdrawFunds() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= walletBalance) {
        walletBalance -= amount;
        updateWalletBalance();
    } else {
        alert('Invalid amount or insufficient balance.');
    }
}

// Update the wallet balance display
function updateWalletBalance() {
    document.getElementById('wallet-balance').textContent = `$${walletBalance.toFixed(2)}`;
}

// Convert currency
function convertCurrency() {
    const amount = parseFloat(document.getElementById('convert-amount').value);
    const rate = parseFloat(document.getElementById('currency').value);
    if (!isNaN(amount) && amount > 0) {
        const convertedAmount = amount * rate;
        document.getElementById('converted-amount').textContent = convertedAmount.toFixed(2);
    } else {
        alert('Please enter a valid amount.');
    }
}