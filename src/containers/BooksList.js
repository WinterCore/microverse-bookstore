import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Book from '../components/Book';

function BooksList({ books }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book
              key={book.id}
              book={book}
            />
          ))
        }
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
