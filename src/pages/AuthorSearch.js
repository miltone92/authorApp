import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import Section from "../components/main-content/section/Section";
import AuthorCardContainer from "../components/cards/Card-Containers/Author/AuthorCardContainer";
import SearchBox from "../components/search-box/SearchBox";

export const AuthorSearch = () => {
  const [data, setData] = useState({
    authors: [],
    filteredAuthors: []
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/author/").then(response => {
      setData({
        authors: response.data,
        filteredAuthors: []
      });
    });
  }, []);

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
