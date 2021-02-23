import PropTypes from 'prop-types';

function Book({
  book: {
    id,
    title,
    category,
  },
  handleRemoveBook,
}) {
  return (
    <tr>
      <td>{ id }</td>
      <td>{ title }</td>
      <td>{ category }</td>
      <td>
        <button
          onClick={() => handleRemoveBook({ id, title, category })}
          type="button"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
