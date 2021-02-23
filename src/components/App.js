import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from '../containers/Header';

function App() {
  return (
    <div>
      <Header />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
