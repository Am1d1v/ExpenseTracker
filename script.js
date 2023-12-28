

const balance = document.querySelector('#balance');
const money_plus = document.querySelector('#money-plus');
const money_minus = document.querySelector('#money_minus');
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

//Init App
function init(){
    list.innerHTML = '';
    transactions.forEach((transaction) => {
        addTransactionDOM(transaction);
    });
}
init();

