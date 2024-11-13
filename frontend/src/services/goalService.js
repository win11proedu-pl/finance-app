// frontend/src/services/goalService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/goals/';

export const addGoal = async (goalData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(API_URL, goalData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getGoals = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
