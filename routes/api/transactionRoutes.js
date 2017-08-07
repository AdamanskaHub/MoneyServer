const express = require('express');
const router = express.Router();
const Entry = require('../../models/transactions');
const passport = require('../../config/passport');
const User = require('../../models/users');
const mongoose = require('mongoose');

console.log("api transactionRoutes");

// router.get('/', (req, res, next) => {
//     console.log("inside router get");
//     Entry.find({}, (err, entries) => {
//         if (err) { return res.json(err).status(500); }

//         return res.json(entries);
//     });
// });

//get users transaction list
router.get('/transactions', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Entry.find({ owner: mongoose.Types.ObjectId(req.user._id) }, function(err, transactionsList) {
        if (err) {
            res.json(err);
        } else {
            res.status(200).json(transactionsList);
        }
    });
});

//post transaction coming from overlay form to DB
router.post('/transactions', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    // FIXME: Add transaction to the user
    const newTransactionEntry = new Entry({
        amount: req.body.amount,
        date: req.body.date,
        account: req.body.account,
        category: req.body.category,
        transactionType: req.body.transactionType,
        owner: req.user._id
    });
    newTransactionEntry.save((err) => {
        if (err) { return res.status(500).json(err); }
        if (newTransactionEntry.errors) { return res.status(400).json(newTransactionEntry); }
        return res.json(newTransactionEntry);
    });
});

//get transactions list from DB
router.get('/transactions/:id', function(req, res, next) {

    const id = req.params.id;

    transaction.findById(id, function(err, transaction) {
        if (err) {
            res.json(err);
        } else {
            res.json(transaction);
        }
    });
});

//print transaction list and update on DB
router.put('/transactions/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    const id = req.params.id;
    const transactionToUpdate = {
        amount: req.body.amount,
        date: req.body.date,
        account: req.body.account,
        category: req.body.category,
        transactionType: req.body.transactionType
    };
    transaction.findByIdAndUpdate({ _id: id, owner: req.user._id }, transactionToUpdate, function(err) {
        if (err) {
            res.json(err);
        } else {
            res.json({ message: "transaction updated" });
        }
    });
});

//delete transactions
router.delete('/transactions/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    var id = req.params.id;

    transaction.remove({ _id: id, owner: req.user._id }, function(err) {
        if (err) {
            res.json(err);
        } else {
            res.json({ message: "transaction deleted" });
        }
    });
});

module.exports = router;