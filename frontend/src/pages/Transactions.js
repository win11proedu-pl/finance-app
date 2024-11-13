// frontend/src/pages/Transactions.js
import React, { useEffect, useState } from 'react';
import { getTransactions, addTransaction } from '../services/transactionService';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    const newTransaction = { amount, type, category };
    const addedTransaction = await addTransaction(newTransaction);
    setTransactions([...transactions, addedTransaction]);
  };

  return (
    <div>
      <h2>Transactions</h2>
      <form onSubmit={handleAddTransaction}>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.category} - {transaction.amount} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
