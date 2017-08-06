const mongoose = require('mongoose');
const transaction = require('../models/transactions');
const user = require('../models/users');

// mongoose.connect('mongodb://localhost/Chatbot');
mongoose.connect("mongodb://localhost:27017/transactiondb");

const transac = [

    { amount: 400, date: 11 / 11 / 2017, account: "main", category: "Rent", icon: 'fa-home', transactionType: "expense" },
    { amount: 5, date: 11 / 11 / 2017, account: "cash", category: "Food", icon: 'fa-cutlery', transactionType: "expense", },
    { amount: 5000, date: 11 / 11 / 2017, account: "main", category: "Salary", icon: 'fa-suitcase', transactionType: "income", },
    { amount: 20, date: 11 / 12 / 2017, account: "main", category: "Health", icon: 'fa-heartbeat', transactionType: "expense", }

];
const User = [{
    username: 'new',
    password: 'new'
}];
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
user.create(User, (err, docs) => {
    if (err) { throw err };
    docs.forEach((user) => {
        console.log(User)
    })
    mongoose.connection.close();
});

//grabbing info from models and insert them to the database





// { amount: 400, date: 11 / 11 / 2017, account: "main", category: "Rent", icon: '<i class="fa fa-home" aria-hidden="true"></i>', transactionType: "expense" },
//     { amount: 5, date: 11 / 11 / 2017, account: "cash", category: "Food", icon: '<i class="fa fa-cutlery" aria-hidden="true"></i>', transactionType: "expense", },
//     { amount: 5000, date: 11 / 11 / 2017, account: "main", category: "Salary", icon: '<i class="fa fa-suitcase" aria-hidden="true"></i>', transactionType: "income", },
//     { amount: 20, date: 11 / 12 / 2017, account: "main", category: "Health", icon: '<i class="fa fa-heartbeat" aria-hidden="true"></i>', transactionType: "expense", }