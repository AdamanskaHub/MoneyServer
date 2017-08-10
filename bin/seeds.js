const mongoose = require('mongoose');
const transaction = require('../models/transactions');
const user = require('../models/users');

// mongoose.connect('mongodb://localhost/Chatbot');
mongoose.connect("mongodb://localhost:27017/transactiondb");

const transac = [

    { amount: 400, date: 11 / 11 / 2017, account: "main", category: '<div><i class="fa fa-home" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Rent<p></div>', icon: 'fa-home', transactionType: "expense" },
    { amount: 5, date: 11 / 11 / 2017, account: "cash", category: '<div><i class="fa fa-cutlery" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Food<p></div>', icon: 'fa-cutlery', transactionType: "expense" },
    { amount: 5000, date: 11 / 11 / 2017, account: "main", category: '<div><i class="fa fa-briefcase" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Salary<p></div>', icon: 'fa-suitcase', transactionType: "income" },
    { amount: 20, date: 11 / 12 / 2017, account: "main", category: '<div><i class="fa fa-heartbeat" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Health<p></div>', icon: 'fa-heartbeat', transactionType: "expense" }

];
const User = [{
    username: 'new',
    password: 'new',
    balanceAmount: 10000
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