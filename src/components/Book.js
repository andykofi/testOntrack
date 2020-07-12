import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Book = ({books, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (books.map((book) =>
        <ListGroup className="text-primary" key={book.id}>
            <ListGroup.Item>
                <h4>{book.book_title}</h4>
                <li>Author : {book.book_author}</li>
                <li>Publication Year : {book.book_publication_year}</li>
                <li>Publication Country : {book.book_publication_country}</li>
                <li>Publication City : {book.book_publication_city}</li>
                <li >Pages : {book.book_pages}</li>
            </ListGroup.Item>
        </ListGroup>
    ));
}

export default Book;