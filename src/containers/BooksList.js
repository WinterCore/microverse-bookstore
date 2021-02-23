import PropTypes from 'prop-types';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { books } from '../actions';

import Book from '../components/Book';

import util from '../utils.module.css';

function BooksList({ books, removeBook }) {
  return (
    <section className={classnames(util.w100, util.section)}>
      {
        books.map(book => (
          <Book
            key={book.id}
            book={book}
            handleRemoveBook={() => removeBook(book)}
          />
        ))
      }
    </section>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => (
  bindActionCreators({ removeBook: books.removeBook }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
