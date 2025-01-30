document.addEventListener('DOMCoded', function() {
    const transactionList = document.getElementById('transaction-list');

    // Example data, replace with actual data fetching logic
    const transactions = [
        { date: '2024-01-01', amount: '$100', description: 'Payment received' },
        { date: '2024-01-02', amount: '$50', description: 'Payment sent' },
        // Add more transactions as needed
    ];

    transactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = `
            <p>Date: ${transaction.date}</p>
            <p>Amount: ${transaction.amount}</p>
            <p>Description: ${transaction.description}</p>
        `;
        transactionList.appendChild(transactionItem);
    });
});