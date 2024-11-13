// backend/controllers/goalController.js
const Goal = require('../models/Goal');

exports.addGoal = async (req, res) => {
  try {
    const goal = new Goal({ ...req.body, user: req.user.id });
    const savedGoal = await goal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
