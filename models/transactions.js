const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    amount: Number,
    date: Date,
    account: Array,
    category: Array,
    transactionType: String

});

const transaction = mongoose.model("transaction", transactionSchema);

module.exports = transaction;