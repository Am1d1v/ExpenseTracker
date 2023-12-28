

const balance = document.querySelector('#balance');
const money_plus = document.querySelector('#money-plus');
const money_minus = document.querySelector('#money-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');

// Initial Transactions
const initialTransactions = [
    {id: 1, text: 'Flowers', amount: -20},
    {id: 2, text: 'Book', amount: -30},
    {id: 3, text: 'Salary', amount: 500},
    {id: 4, text: 'Camera', amount: -150}
];

let transactions = initialTransactions;

// Add transactions to DOM list
function addTransactionDOM(transaction){
    //Sign for transaction
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    //Add class based on value
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)} $</span> <button class="delete-btn">X</button>
    `;
    list.appendChild(item);
}

//Update the balance income and expense
function updateBalance(){
    // Get amount of every transaction
    const amounts = transactions.map((transaction) => {
        return transaction.amount;
    })
    // Total Balance
    const totalBalance = amounts.reduce((acc, item) => {
        return acc += item}, 0).toFixed(2);    

    // Income
    const income = amounts
                        .filter(item => item > 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2);

    // Expense
    const expense = amounts
                        .filter(item => item < 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2);                    

    // Set total balance, income and expense in DOM                    
    balance.innerHTML = `${totalBalance} $`;
    money_plus.innerHTML = `+${income} $`;
    money_minus.innerHTML = `${expense} $`;
    
}

// Add new transaction
function addTransaction(event){
    event.preventDefault();

    // If transaction value is empty
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('Please add a text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        }
        // Add new transaction into transactions array
        transactions.push(transaction);

        // Update transactions data
        addTransactionDOM(transaction);
        updateBalance();
        
        text.value = '';
        amount.value = '';
    }
    
}

// Generate random ID
function generateID(){
    return Math.floor(Math.random() * 1000000);
}

// Add new transaction listener
form.addEventListener('submit', addTransaction);

//Init App
function init(){
    list.innerHTML = '';
    transactions.forEach((transaction) => { 
        addTransactionDOM(transaction);
    });
    updateBalance();
}
init();

