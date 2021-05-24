import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
