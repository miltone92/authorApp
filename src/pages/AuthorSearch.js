import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import Section from "../components/main-content/section/Section";
import AuthorCardContainer from "../components/cards/Card-Containers/Author/AuthorCardContainer";
import SearchBox from "../components/search-box/SearchBox";

export const AuthorSearch = () => {
  const [data, setData] = useState({
    authors: [],
    books: [],
    filteredAuthors: []
  });

  useEffect(() => {

    const authors = axios.get("http://localhost:3000/routes/authors/")
    const books = axios.get("http://localhost:3000/routes/books/")

    axios.all([authors, books]).then(axios.spread((...responses) => {

      const authorList = responses[0].data
      const bookList = responses[1].data

      assignBooks(authorList, bookList)
    }))


  }, []);


  let assignBooks = (authors, books) => {

    const authorsWithBooks = authors.map(author => ({ ...author, books: books.filter(book => book.author === author.fullName) }));

    //*** Abobe ^ si same as the following */
    // console.log(authors)
    // for (const a of authors) {
    //   a.books = [];
    //   for (const b of books) {
    //     if (a.fullName === b.author) {
    //       a.books.push(b)
    //     }
    //   }
    // }



    setData({
      ...data,
      authors: authorsWithBooks,
      books: books,
    });
  }

  let getFormData = value => {
    setAuthors(value);
  };

  let setAuthors = value => {
    let filter = [
      ...data.authors.filter(a =>
        a.fullName.toLowerCase().includes(value.toLowerCase())
      )
    ];
    setData({
      ...data,
      filteredAuthors: filter
    });
  };

  return (
    <div>
      <Section>
        <SearchBox callback={getFormData} />
        <AuthorCardContainer
          authors={
            data.filteredAuthors.length > 0
              ? data.filteredAuthors
              : data.authors
          }
        />
      </Section>
    </div>
  );
};

export default AuthorSearch;
