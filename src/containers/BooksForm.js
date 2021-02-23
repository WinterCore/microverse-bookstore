import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { books } from '../actions';

import { categories } from '../data';

function BooksForm({ createBook }) {
  const [formData, setFormData] = React.useState({ title: '', category: '' });

  const handleChange = e => {
    setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createBook(formData);
    setFormData({ title: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add book</legend>
        <div>
          <label htmlFor="title">
            Title&nbsp;
            <input id="title" type="text" name="title" required onChange={handleChange} value={formData.title} />
          </label>
        </div>
        <div>
          <label htmlFor="category">
            Category&nbsp;
            <select
              id="category"
              name="category"
              onChange={handleChange}
              value={formData.category}
              required
            >
              <option value="" disabled>Select your option</option>
              { categories.map(c => <option key={c} value={c}>{c}</option>) }
            </select>
          </label>
        </div>
        <button type="submit">Save</button>
      </fieldset>
    </form>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ createBook: books.createBook }, dispatch)
);

export default connect(null, mapDispatchToProps)(BooksForm);
