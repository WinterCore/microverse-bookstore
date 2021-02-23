import classnames from 'classnames';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from '../containers/Header';

import util from '../utils.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={classnames(util.flex, util.column, util.alignCenter)}>
        <div className={util.container}>
          <BooksList />
          <BooksForm />
        </div>
      </div>
    </div>
  );
}

export default App;
