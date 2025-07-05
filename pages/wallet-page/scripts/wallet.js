import { walletHeader, walletBalance } from "./wallet-data.js";

let walletHeaderHTML = '';
let walletBalanceHTML = '';

walletHeader.forEach((walletHeader) => {
    walletHeaderHTML += `
      <h1>${walletHeader.headerH1}</h1>
    `;
})

document.querySelector('.header').innerHTML = walletHeaderHTML;

walletBalance.forEach((walletBalance) => {
    walletBalanceHTML += `
            <h2>${walletBalance.balanceH2}</h2>
            <p>${walletBalance.balanceP}
             <span id="wallet-balance">$0.00</span></p>
            <div class="wallet-actions">
                <input type="text" id="amount" placeholder="Enter amount" />
            </div>
            <div class="wallet-actions">
                <br>
                <button onclick="addFunds()">${walletBalance.addFunds}</button>
                <button onclick="withdrawFunds()">${walletBalance.withdrawFunds}</button>
            </div>
    `;
})

document.querySelector('.wallet-balance').innerHTML = walletBalanceHTML;