import React from 'react';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      name: 'Health',
      amount: 2000,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', name: 'New TV', amount: 7000, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      name: 'Car Insurance',
      amount: 5000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      name: 'Netflix',
      amount: 500,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
