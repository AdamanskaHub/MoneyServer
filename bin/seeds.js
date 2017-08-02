const mongoose = require('mongoose');
const transaction = require('../models/transactions');
const user = require('../models/users');

// mongoose.connect('mongodb://localhost/Chatbot');
mongoose.connect("mongodb://localhost:27017/transactiondb");

const transac = [

    { amount: 400, date: 11 / 11 / 2017, account: "main", category: "rent", transactionType: "expense" }, { amount: 5, date: 11 / 11 / 2017, account: "cash", category: "food", transactionType: "expense" }, { amount: 5000, date: 11 / 11 / 2017, account: "main", category: "salary", transactionType: "income" }, { amount: 20, date: 11 / 12 / 2017, account: "main", category: "health", transactionType: "expense" }

];

// transaction.create(transac, (err, transaction) => {
//     if (err) {
//         throw err;
//     }
//     console.log(transaction);
//     mongoose.connection.close();
// });

transaction.create(transac, (err, docs) => {
    if (err) { throw err };
    docs.forEach((transac) => {
        console.log(transac)
    })
    mongoose.connection.close();
});

//grabbing info from models and insert them to the database