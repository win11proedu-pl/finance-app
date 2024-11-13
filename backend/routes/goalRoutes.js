// backend/routes/goalRoutes.js
const express = require('express');
const router = express.Router();
const { addGoal, getGoals } = require('../controllers/goalController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, addGoal);
router.get('/', authMiddleware, getGoals);

module.exports = router;
