import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './styles.scss';
import Book from "./components/Book";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

const App = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(2);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            const res = await axios.post("http://nyx.vima.ekt.gr:3000/api/books");
            setBooks(res.data.books);
            setLoading(false);
        };

        fetchBooks();
    }, []);

    // Get current books
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentPosts = books.slice(indexOfFirstBook, indexOfLastBook);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className='container mt-5'>
            <Search search={e => setSearch(e.target.value)}/>
            <Book books={currentPosts} loading={loading} />
           <Pagination
               booksPerPage={booksPerPage}
               totalBooks={books.length}
               paginate={paginate}
           />
        </div>
    );
}

export default App;
