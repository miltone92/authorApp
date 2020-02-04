import React, { useState, useEffect } from "react";
import axios from "axios";
// import { GetBooks } from "../hooks/hooks"

//Components
import Section from "../components/main-content/section/Section";
import BookCardContainer from "../components/cards/Card-Containers/Book/BookCardContainer";
import SearchBox from "../components/search-box/SearchBox";

export const BookSearch = () => {
  const [data, setData] = useState({
    books: [],
    filteredBooks: []
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/book/").then(response => {
      setData({
        books: response.data,
        filteredBooks: []
      });
    });
  }, []);

  let getFormData = value => {
    setFilteredBooks(value);
  };

  let setFilteredBooks = value => {
    let filter = [
      ...data.books.filter(b =>
        b.title.toLowerCase().includes(value.toLowerCase())
      )
    ];

    setData({
      ...data,
      filteredBooks: filter
    });
  };

  return (
    <div>
      <Section>
        <SearchBox callback={getFormData} />
        <BookCardContainer
          books={
            data.filteredBooks.length > 0 ? data.filteredBooks : data.books
          }
        />
      </Section>
    </div>
  );
};

export default BookSearch;
