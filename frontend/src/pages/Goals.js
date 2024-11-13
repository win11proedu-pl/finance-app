// frontend/src/pages/Goals.js
import React, { useEffect, useState } from 'react';
import { getGoals, addGoal } from '../services/goalService';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const fetchGoals = async () => {
      const data = await getGoals();
      setGoals(data);
    };
    fetchGoals();
  }, []);

  const handleAddGoal = async (e) => {
    e.preventDefault();
    const newGoal = { title, targetAmount, dueDate };
    const addedGoal = await addGoal(newGoal);
    setGoals([...goals, addedGoal]);
  };

  return (
    <div>
      <h2>Goals</h2>
      <form onSubmit={handleAddGoal}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="Target Amount" required />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((goal) => (
          <li key={goal._id}>
            {goal.title} - {goal.currentAmount}/{goal.targetAmount} (Due: {goal.dueDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
