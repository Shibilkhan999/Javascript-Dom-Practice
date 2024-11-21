let balance = 0;
const transactionList = document.getElementById('transaction-list');

function addItem(type) {
    const itemName = document.getElementById('item-name').value;
    const itemAmount = parseFloat(document.getElementById('item-amount').value);

    if (itemName && !isNaN(itemAmount)) {
        const amount = type === 'income' ? itemAmount : -itemAmount;
        balance += amount;
        updateBalance();
        addTransaction(itemName, itemAmount, type);
        document.getElementById('item-name').value = '';
        document.getElementById('item-amount').value = '';
    } else {
        alert('Please enter a valid item name and amount.');
    }
}

function updateBalance() {
    document.getElementById('balance').textContent = 'Balance: $' + balance.toFixed(2);
}

function addTransaction(name, amount, type) {
    const li = document.createElement('li');
    li.innerHTML = `${name} (${type}): $${amount.toFixed(2)}`;
    transactionList.appendChild(li);
}