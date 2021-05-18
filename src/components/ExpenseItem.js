import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <article className="expense-item">
      <div className="expense-item-details">
        <p className="expense-item-date">{props.date.toDateString()}</p>
        <p className="expense-item-name">{props.name}</p>
      </div>
      <p className="expense-item-amount">Rs {props.amount}</p>
    </article>
  );
}

export default ExpenseItem;
