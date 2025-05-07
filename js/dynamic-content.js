const billData = {
    electricity: 
    { 
        label: "Electricity" 
    },
    water: 
    { 
        label: "Water" 
    },
    internet: 
    { 
        label: "Internet" 
    },
    rent: 
    { 
        label: "Rent" 
    }
};

function showBillForm(billType) {
    const billForm = document.getElementById('bill-form');
    const bill = billData[billType];
    if (bill) {
        billForm.innerHTML = `
            <label for="${billType}-amount">Amount:</label>
            <input type="text" id="${billType}-amount" name="${billType}-amount" class="form-control" placeholder="Enter amount">
            <button class="btn btn-primary" onclick="payBill('${billType}')">Pay Now</button>
        `;
    } else {
        billForm.innerHTML = '';
    }
}

function payBill(billType) {
    showNotification(`Paying ${billData[billType].label} bill`);
}

function payBill(billType) {
    const amountInput = document.getElementById(`${billType}-amount`);
    const amount = parseFloat(amountInput.value);
    if (!validateAmount(amount)) return;
    
    showNotification(`Processing payment for ${billData[billType].label} bill...`);
    setTimeout(() => {
        const success = Math.random() > 0.2; // 80% chance of success
        if (success) {
            showNotification(`Payment for ${billData[billType].label} bill of $${amount} was successful.`);
        } else {
            showNotification(`Payment for ${billData[billType].label} bill of $${amount} failed. Please try again.`);
        }
    }, 2000);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
