import React from 'react';

import './ExpenseFilter.css';

function ExpenseFilter(props) {
  function yearChangeHandler(event) {
    props.onFilterYear(event.target.value);
  }

  return (
    <div className="expense-filter">
      <label className="expense-filter-label">Filter By Year</label>
      <select
        value={props.selected}
        className="expense-filter-control"
        onChange={yearChangeHandler}
      >
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
