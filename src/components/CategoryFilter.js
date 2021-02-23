import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../data';

function CategoryFilter({ handleFilterChange, filter }) {
  return (
    <select value={filter} onChange={({ target: { value } }) => handleFilterChange(value)}>
      <option value="">All</option>
      { categories.map(c => <option key={c} value={c}>{ c }</option>) }
    </select>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default (CategoryFilter);
