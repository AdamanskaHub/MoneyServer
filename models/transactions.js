const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    amount: Number,
    date: Date,
    account: Array,
    category: Array,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    icon: String,
    transactionType: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
});

const transaction = mongoose.model("transaction", transactionSchema);

module.exports = transaction;