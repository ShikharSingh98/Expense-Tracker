import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <article className="expense-item">
      <div className="expense-item-details">
        <span className="expense-item-date">{props.date.toDateString()}</span>
        <span className="expense-item-name">{props.name}</span>
      </div>
      <span className="expense-item-amount">Rs {props.amount}</span>
    </article>
  );
}

export default ExpenseItem;
