document.addEventListener('DOMContentLoaded', function() {
    const transactionList = document.getElementById('transaction-list');
    const transactionConfirmation = document.getElementById('transaction-confirmation');
    const expenditureChartCtx = document.getElementById('expenditureBarChart').getContext('2d');

    // Example data, replace with actual data fetching logic
    const transactions = [
        { 
            date: '2024-01-01', 
            amount: '$100', 
            description: 'Payment received' 
        }, { 
            date: '2024-01-02', 
            amount: '$50', 
            description: 'Payment sent' 
        },
        // Add more transactions as needed
    ];

    const expenditureData = {
        labels: [
            'Rent', 
            'Groceries', 
            'Utilities', 
            'Entertainment', 
            'Others'
        ],
        datasets: [
            {
            data: [
                500, 
                200, 
                150, 
                100, 
                50
            ], 
            // Example data, replace with actual data
            backgroundColor: [
                '#FF6384', 
                '#36A2EB', 
                '#FFCE56', 
                '#4BC0C0', 
                '#9966FF'
            ]
        }]
    };

    // Generate transaction confirmation message
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation-message');
    confirmationMessage.innerHTML = `
        <p>
            Your recent transaction was successful!
        </p>
        `;
    transactionConfirmation.appendChild(confirmationMessage);

    // Make the comfirmation message disappear after 5 seconds 
    setTimeout(() =>{
        confirmationMessage.remove();
    }, 5000);

    // Generate recent transactions
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

    // Generate expenditure bar chart
    new Chart(expenditureChartCtx, {
        type: 'bar',
        data: expenditureData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Overall Expenditure'
                }
            }
        }
    });
});