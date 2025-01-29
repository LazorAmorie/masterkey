const billData = {
    electricity: { label: "Electricity" },
    water: { label: "Water" },
    internet: { label: "Internet" },
    rent: { label: "Rent" }
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

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
