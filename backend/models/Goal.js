// backend/models/Goal.js
const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  dueDate: { type: Date, required: true },
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
