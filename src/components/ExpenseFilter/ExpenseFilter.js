import React from 'react';

import './ExpenseFilter.css';

function ExpenseFilter(props) {
  function yearChangeHandler(event) {
    props.onFilterYear(event.target.value);
  }

  return (
    <div className="expesnse">
      <select onChange={yearChangeHandler}>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
