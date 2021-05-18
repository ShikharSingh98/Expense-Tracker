import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <article className="expense-item">
      <div className="expense-item-details">
        <p className="expense-item-date">May 18th 2021</p>
        <p className="expense-item-name">Car Insurance</p>
      </div>
      <p className="expense-item-price">Rs54000</p>
    </article>
  );
}

export default ExpenseItem;
