// backend/controllers/transactionController.js
const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
  try {
    const transaction = new Transaction({ ...req.body, user: req.user.id });
    const savedTransaction = await transaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
